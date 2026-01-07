
import React from 'react';
import { motion } from 'framer-motion';

interface ShowcaseSectionProps {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  reverse?: boolean;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ id, image, title, subtitle, reverse }) => {
  return (
    <section id={id} className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className={reverse ? 'md:order-2' : ''}
        >
          <div className="relative aspect-[16/9] md:aspect-[4/5] overflow-hidden shadow-2xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className={reverse ? 'md:order-1' : ''}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-olive font-bold mb-6 block">
            {subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-charcoal leading-tight">
            {title}
          </h2>
          <div className="w-12 h-[1px] bg-olive/30 mb-8"></div>
          <p className="text-charcoal/60 leading-loose text-lg font-light mb-10">
            일상에 자연을 더하는 가장 세련된 방법. <br />
            당신의 공간을 더 가치 있게 만드는 뚬뚜미의 감각입니다.
          </p>
          <motion.button
            whileHover={{ x: 10 }}
            className="text-[10px] tracking-[0.4em] uppercase text-olive font-bold flex items-center space-x-4 border-b border-olive/10 pb-2"
          >
            <span>Explore Collection</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
