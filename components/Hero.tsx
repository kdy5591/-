
import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

interface HeroProps {
  title: string;
  slogan: string;
  description: string;
  images: string[];
}

export const Hero: React.FC<HeroProps> = ({ title, slogan, description, images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image Carousel */}
      <motion.div 
        style={{ y: y1, scale }}
        className="absolute inset-0 z-0 opacity-80"
      >
        <AnimatePresence mode='wait'>
          <motion.img 
            key={images[currentIdx]}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            src={images[currentIdx] || "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"} 
            alt="Premium Hero"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ivory"></div>
      </motion.div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <div className="absolute inset-0 z-20 flex items-center justify-between px-10 pointer-events-none">
          <button 
            onClick={prevImage}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white transition-all pointer-events-auto backdrop-blur-sm bg-black/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            onClick={nextImage}
            className="w-12 h-12 flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white transition-all pointer-events-auto backdrop-blur-sm bg-black/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              className={`h-[1px] transition-all duration-700 ${idx === currentIdx ? 'w-12 bg-white' : 'w-4 bg-white/20'}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="inline-block mb-6 text-[10px] md:text-xs tracking-[0.5em] uppercase text-white/90"
        >
          {slogan}
        </motion.span>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif mb-10 leading-[1.2] text-white font-light text-shadow whitespace-pre-line">
          {title}
        </h1>
        
        <div className="h-[1px] w-24 bg-white/30 mx-auto mb-10"></div>
        
        <p className="text-base md:text-lg font-light mb-12 max-w-xl mx-auto text-white/80 leading-relaxed tracking-wide whitespace-pre-line">
          {description}
        </p>
        
        <motion.a 
          href="#about"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-12 py-5 border border-white/50 text-white uppercase tracking-[0.3em] text-[10px] md:text-xs font-light inline-block hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm pointer-events-auto"
        >
          Discover More
        </motion.a>
      </motion.div>

      {/* Aesthetic Side Text */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block overflow-hidden pointer-events-none">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="writing-mode-vertical text-[10px] tracking-[0.5em] uppercase text-white/30 transform -rotate-180"
          style={{ writingMode: 'vertical-rl' }}
        >
          Elegance in details — Collection 2024
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};
