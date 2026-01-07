
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AboutProps {
  label: string;
  title: string;
  philosophy: string;
  feature1Title: string;
  feature1Desc: string;
  feature2Title: string;
  feature2Desc: string;
  images: string[];
}

export const About: React.FC<AboutProps> = ({ 
  label, 
  title, 
  philosophy, 
  feature1Title, 
  feature1Desc, 
  feature2Title, 
  feature2Desc, 
  images 
}) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Auto-slide if multiple images
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-24 md:py-40 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="relative w-full h-[600px] overflow-hidden bg-earthy/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img 
                key={images[currentImageIdx] || 'placeholder'}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                src={images[currentImageIdx] || "https://images.unsplash.com/photo-1591336323062-8758837e283d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"} 
                alt="Philosophy Visual"
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Gallery Navigation Dots */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIdx(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${idx === currentImageIdx ? 'bg-white w-4' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            )}
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-olive p-8 text-white hidden md:flex flex-col justify-end shadow-xl z-10">
            <span className="text-4xl font-serif">100%</span>
            <span className="text-xs tracking-widest uppercase mt-2">Sustainable Materials</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-sm tracking-[0.3em] text-olive uppercase mb-6 font-semibold">{label}</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-snug whitespace-pre-line text-charcoal">
            {title}
          </h3>
          <p className="text-charcoal/70 leading-loose mb-8 text-lg font-light whitespace-pre-line">
            {philosophy}
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-olive/20 pt-8">
            <div>
              <h4 className="font-serif text-xl mb-2 text-olive">{feature1Title}</h4>
              <p className="text-sm text-charcoal/60">{feature1Desc}</p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-2 text-olive">{feature2Title}</h4>
              <p className="text-sm text-charcoal/60">{feature2Desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
