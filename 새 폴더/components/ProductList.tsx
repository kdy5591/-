
import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "프리미엄 대나무 칫솔 세트",
    price: 18000,
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Bathroom"
  },
  {
    id: 2,
    name: "유기농 고체 샴푸 바",
    price: 15000,
    image: "https://images.unsplash.com/photo-1607006342411-9a9978a3c898?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Body Care"
  },
  {
    id: 3,
    name: "제로웨이스트 주방 세트",
    price: 32000,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Kitchen"
  },
  {
    id: 4,
    name: "천연 소이 왁스 캔들",
    price: 24000,
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Living"
  }
];

export const ProductList: React.FC = () => {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm tracking-[0.3em] text-olive uppercase mb-4">Curated Collection</h2>
            <h3 className="text-4xl font-serif">Best Sellers</h3>
          </div>
          <a href="#" className="text-sm tracking-widest uppercase border-b border-olive pb-1 hover:text-olive transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {PRODUCTS.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/5] bg-ivory mb-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 text-xs tracking-widest uppercase font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  Quick Add
                </motion.button>
              </div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-olive mb-2">{product.category}</p>
              <h4 className="text-lg font-serif mb-2 group-hover:text-olive transition-colors">{product.name}</h4>
              <p className="text-charcoal font-light">₩{product.price.toLocaleString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
