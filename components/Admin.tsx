
import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdminProps {
  content: {
    heroTitle: string;
    heroSlogan: string;
    heroDescription: string;
    heroImages: string[];
    aboutLabel: string;
    aboutTitle: string;
    aboutPhilosophy: string;
    aboutFeature1Title: string;
    aboutFeature1Desc: string;
    aboutFeature2Title: string;
    aboutFeature2Desc: string;
    aboutImages: string[];
    sumiImage: string;
    ttumImage: string;
    minImage: string;
    contactEmail: string;
  };
  setContent: React.Dispatch<React.SetStateAction<any>>;
  onClose: () => void;
}

export const Admin: React.FC<AdminProps> = ({ content, setContent, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  
  const aboutFileRef = useRef<HTMLInputElement>(null);
  const heroFileRef = useRef<HTMLInputElement>(null);
  const sumiFileRef = useRef<HTMLInputElement>(null);
  const ttumFileRef = useRef<HTMLInputElement>(null);
  const minFileRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '2408') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 2000);
    }
  };

  const handleChange = (field: string, value: any) => {
    setContent((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleHeroImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImageUrls = Array.from(files).map((file: File) => URL.createObjectURL(file));
      setContent((prev: any) => ({
        ...prev,
        heroImages: [...prev.heroImages, ...newImageUrls]
      }));
    }
  };

  const handleAboutImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImageUrls = Array.from(files).map((file: File) => URL.createObjectURL(file));
      setContent((prev: any) => ({
        ...prev,
        aboutImages: [...prev.aboutImages, ...newImageUrls]
      }));
    }
  };

  const handleSingleImageUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleChange(field, URL.createObjectURL(file));
    }
  };

  const removeImage = (field: 'heroImages' | 'aboutImages', idx: number) => {
    const updatedImages = (content[field] as string[]).filter((_, i) => i !== idx);
    handleChange(field, updatedImages);
  };

  if (!isAuthenticated) {
    return (
      <section className="min-h-screen bg-ivory flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-white p-12 shadow-2xl rounded-sm text-center"
        >
          <h2 className="text-2xl font-serif text-olive mb-2">관리자 접속</h2>
          <p className="text-[10px] tracking-[0.3em] uppercase text-charcoal/40 mb-10">Restricted Access</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="relative">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                className={`w-full bg-ivory/50 border-b ${error ? 'border-red-400' : 'border-charcoal/10'} py-4 px-2 outline-none focus:border-olive transition-colors text-center tracking-[0.5em] text-sm`}
                autoFocus
              />
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-0 w-full text-[9px] text-red-400 tracking-widest uppercase"
                  >
                    Incorrect Password
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="pt-4 flex space-x-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 py-4 border border-charcoal/10 text-[10px] tracking-[0.3em] uppercase hover:bg-ivory transition-colors"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 py-4 bg-olive text-white text-[10px] tracking-[0.3em] uppercase hover:bg-charcoal transition-colors shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-ivory pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b border-olive/20 pb-8">
          <div>
            <h2 className="text-3xl font-serif text-olive">관리자 대시보드</h2>
            <p className="text-sm text-charcoal/60 tracking-widest uppercase mt-2">Content Management System</p>
          </div>
          <div className="flex space-x-4">
            <button 
              onClick={onClose}
              className="px-6 py-2 bg-charcoal text-white text-[10px] tracking-[0.2em] uppercase hover:bg-olive transition-colors shadow-lg"
            >
              Save & Exit
            </button>
          </div>
        </div>

        <div className="grid gap-10">
          {/* Hero Section Editing */}
          <div className="bg-white p-8 shadow-sm border border-olive/5 rounded-sm">
            <h3 className="text-xs tracking-[0.3em] uppercase text-olive mb-6 font-bold border-l-2 border-olive pl-3">Hero Section</h3>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Slogan</label>
                <input 
                  type="text" 
                  value={content.heroSlogan}
                  onChange={(e) => handleChange('heroSlogan', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Main Title</label>
                <textarea 
                  rows={2}
                  value={content.heroTitle}
                  onChange={(e) => handleChange('heroTitle', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm resize-none"
                />
              </div>
              
              <div className="pt-4">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40 block mb-4">Hero Slider Images</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <AnimatePresence>
                    {content.heroImages.map((url, idx) => (
                      <motion.div 
                        key={url}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative aspect-square group overflow-hidden bg-ivory border border-charcoal/5"
                      >
                        <img src={url} alt={`Hero ${idx}`} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeImage('heroImages', idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-bold"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <button 
                    onClick={() => heroFileRef.current?.click()}
                    className="aspect-square border-2 border-dashed border-charcoal/10 flex flex-col items-center justify-center hover:border-olive/40 hover:bg-olive/5 transition-all group"
                  >
                    <span className="text-2xl text-charcoal/20 group-hover:text-olive/40 mb-1">+</span>
                    <span className="text-[8px] tracking-[0.2em] uppercase text-charcoal/30 group-hover:text-olive/50">Add Slide</span>
                  </button>
                </div>
                <input type="file" ref={heroFileRef} onChange={handleHeroImageUpload} multiple accept="image/*" className="hidden" />
              </div>
            </div>
          </div>

          {/* Persona Showcase Images */}
          <div className="bg-white p-8 shadow-sm border border-olive/5 rounded-sm">
            <h3 className="text-xs tracking-[0.3em] uppercase text-olive mb-6 font-bold border-l-2 border-olive pl-3">Persona Sections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Lee Sumi', field: 'sumiImage', ref: sumiFileRef },
                { name: 'Ttumttumi', field: 'ttumImage', ref: ttumFileRef },
                { name: 'Mindungi', field: 'minImage', ref: minFileRef }
              ].map((item) => (
                <div key={item.field} className="flex flex-col items-center">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40 mb-4">{item.name} Image</span>
                  <div className="relative w-full aspect-[3/4] bg-ivory border border-charcoal/5 group overflow-hidden">
                    <img src={(content as any)[item.field]} className="w-full h-full object-cover" alt={item.name} />
                    <button 
                      onClick={() => item.ref.current?.click()}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase"
                    >
                      Update
                    </button>
                  </div>
                  <input 
                    type="file" 
                    ref={item.ref} 
                    onChange={(e) => handleSingleImageUpload(item.field, e)} 
                    accept="image/*" 
                    className="hidden" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="bg-white p-8 shadow-sm border border-olive/5 rounded-sm">
            <h3 className="text-xs tracking-[0.3em] uppercase text-olive mb-6 font-bold border-l-2 border-olive pl-3">Philosophy (About)</h3>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Top Label</label>
                <input 
                  type="text" 
                  value={content.aboutLabel}
                  onChange={(e) => handleChange('aboutLabel', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Section Title</label>
                <textarea 
                  rows={2}
                  value={content.aboutTitle}
                  onChange={(e) => handleChange('aboutTitle', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm resize-none"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Philosophy Description</label>
                <textarea 
                  rows={4}
                  value={content.aboutPhilosophy}
                  onChange={(e) => handleChange('aboutPhilosophy', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm resize-none"
                />
              </div>

              <div className="pt-8">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40 block mb-4">Philosophy Gallery Images</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <AnimatePresence>
                    {content.aboutImages.map((url, idx) => (
                      <motion.div 
                        key={url}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="relative aspect-square group overflow-hidden bg-ivory border border-charcoal/5"
                      >
                        <img src={url} alt={`About ${idx}`} className="w-full h-full object-cover" />
                        <button 
                          onClick={() => removeImage('aboutImages', idx)}
                          className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-[10px] tracking-widest uppercase font-bold"
                        >
                          Remove
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <button 
                    onClick={() => aboutFileRef.current?.click()}
                    className="aspect-square border-2 border-dashed border-charcoal/10 flex flex-col items-center justify-center hover:border-olive/40 hover:bg-olive/5 transition-all group"
                  >
                    <span className="text-2xl text-charcoal/20 group-hover:text-olive/40 mb-1">+</span>
                    <span className="text-[8px] tracking-[0.2em] uppercase text-charcoal/30 group-hover:text-olive/50">Add Image</span>
                  </button>
                </div>
                <input type="file" ref={aboutFileRef} onChange={handleAboutImageUpload} multiple accept="image/*" className="hidden" />
              </div>
            </div>
          </div>

          {/* Contact Section Editing */}
          <div className="bg-white p-8 shadow-sm border border-olive/5 rounded-sm">
            <h3 className="text-xs tracking-[0.3em] uppercase text-olive mb-6 font-bold border-l-2 border-olive pl-3">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex flex-col space-y-2">
                <label className="text-[10px] tracking-[0.2em] uppercase text-charcoal/40">Display Email</label>
                <input 
                  type="email" 
                  value={content.contactEmail}
                  onChange={(e) => handleChange('contactEmail', e.target.value)}
                  className="bg-ivory/20 border border-charcoal/10 p-3 outline-none focus:border-olive text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] tracking-[0.4em] uppercase text-charcoal/30">
          Admin Session Protected • Changes apply immediately to local view
        </div>
      </div>
    </section>
  );
};
