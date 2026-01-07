
import React from 'react';
import { motion } from 'framer-motion';

interface ContactProps {
  email: string;
}

export const Contact: React.FC<ContactProps> = ({ email }) => {
  return (
    <section id="contact" className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.4em] text-olive uppercase mb-6"
          >
            Contact Us
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif mb-8 text-charcoal leading-snug"
          >
            뚬뚜미의 뽈따구를 물어볼 사람들은<br />아래의 메일로 연락바랍니다.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-olive font-medium tracking-wider"
          >
            {email}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-ivory/30 p-8 md:p-12 rounded-sm border border-olive/5"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-semibold">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent border-b border-charcoal/10 py-3 outline-none focus:border-olive transition-colors text-charcoal"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-semibold">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent border-b border-charcoal/10 py-3 outline-none focus:border-olive transition-colors text-charcoal"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 font-semibold">Message</label>
              <textarea 
                rows={4}
                className="bg-transparent border-b border-charcoal/10 py-3 outline-none focus:border-olive transition-colors text-charcoal resize-none"
                placeholder="어떤 점이 궁금하신가요?"
              ></textarea>
            </div>
            <div className="pt-6 flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-16 py-4 bg-olive text-white text-[11px] tracking-[0.3em] uppercase hover:bg-charcoal transition-colors duration-500 shadow-lg"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
