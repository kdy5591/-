
import React from 'react';
import { motion } from 'framer-motion';
import { Review } from '../types';

const REVIEWS: Review[] = [
  {
    id: 1,
    author: "김지아",
    content: "대나무 칫솔의 그립감이 너무 좋고, 화장실 인테리어랑도 너무 잘 어울려요. 포장까지 종이라서 마음이 편안합니다.",
    rating: 5,
    date: "2024.03.15"
  },
  {
    id: 2,
    author: "이정훈",
    content: "처음 써본 샴푸바였는데 거품도 잘 나고 무엇보다 플라스틱 쓰레기가 안 나와서 대만족입니다. 향도 고급스러워요.",
    rating: 5,
    date: "2024.03.10"
  },
  {
    id: 3,
    author: "박수진",
    content: "캔들 디자인이 정말 미니멀해서 선물용으로도 최고예요. 소이 왁스라 안심하고 켜두고 있습니다.",
    rating: 4,
    date: "2024.02.28"
  }
];

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-ivory">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-sm tracking-[0.3em] text-olive uppercase mb-4">Customer Voice</h2>
        <h3 className="text-4xl font-serif mb-16 italic">What They Say</h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          {REVIEWS.map((review, idx) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white p-10 shadow-sm flex flex-col items-center"
            >
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-4 w-4 ${i < review.rating ? 'text-olive' : 'text-gray-200'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-charcoal/70 italic leading-loose mb-8 text-sm">
                "{review.content}"
              </p>
              <div className="mt-auto">
                <p className="font-serif font-bold text-olive">{review.author}</p>
                <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">{review.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
