
import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ShowcaseSection } from './components/ShowcaseSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Admin } from './components/Admin';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'admin'>('home');
  
  // Centralized site content for editing
  const [content, setContent] = useState({
    heroTitle: "뚬뚜미의 뽈따구는\n과학이다.",
    heroSlogan: "Absolute Aesthetic Precision",
    heroDescription: "완벽한 균형과 미학적 완성도를 추구하는\n뚬뚜미만의 독보적인 감각을 경험해보세요.",
    heroImages: ["https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"],
    aboutLabel: "OUR PHILOSOPHY",
    aboutTitle: "불필요한 것은 덜어내고,\n자연의 가치를 담습니다.",
    aboutPhilosophy: "민둥이의 뽈따구는 과학이다. 민둥이의 뽈따구는 백만불짜리이다.",
    aboutFeature1Title: "Zero Plastic",
    aboutFeature1Desc: "모든 포장재는 생분해성 소재를 사용합니다.",
    aboutFeature2Title: "Minimal Design",
    aboutFeature2Desc: "감각적인 미학을 유지하는 미니멀리즘 디자인.",
    aboutImages: ["https://images.unsplash.com/photo-1591336323062-8758837e283d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
    // Showcase Section Images
    sumiImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    ttumImage: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    minImage: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    contactEmail: "hello@ttumttumi.com"
  });

  useEffect(() => {
    setIsLoaded(true);
    const handleHash = () => {
      if (window.location.hash === '#admin') setCurrentView('admin');
      else setCurrentView('home');
    };
    window.addEventListener('hashchange', handleHash);
    handleHash();
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (view: 'home' | 'admin') => {
    window.location.hash = view === 'admin' ? 'admin' : '';
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      navigateTo('home');
      // Wait for navigation before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-olive selection:text-white">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-ivory flex items-center justify-center"
          >
            <motion.div 
              initial={{ opacity: 0, letterSpacing: '0.5em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-olive font-serif text-4xl"
            >
              뚬뚜미
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar 
        onNavigateHome={() => navigateTo('home')} 
        onScrollToSection={scrollToSection}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero 
              title={content.heroTitle} 
              slogan={content.heroSlogan} 
              description={content.heroDescription} 
              images={content.heroImages}
            />
            <About 
              label={content.aboutLabel}
              title={content.aboutTitle} 
              philosophy={content.aboutPhilosophy} 
              feature1Title={content.aboutFeature1Title}
              feature1Desc={content.aboutFeature1Desc}
              feature2Title={content.aboutFeature2Title}
              feature2Desc={content.aboutFeature2Desc}
              images={content.aboutImages}
            />
            
            <ShowcaseSection 
              id="sumi"
              image={content.sumiImage}
              title="Lee Sumi"
              subtitle="The Muse"
            />
            <ShowcaseSection 
              id="ttumttumi"
              image={content.ttumImage}
              title="Ttumttumi"
              subtitle="The Essence"
              reverse
            />
            <ShowcaseSection 
              id="mindungi"
              image={content.minImage}
              title="Mindungi"
              subtitle="The Pure"
            />

            <Contact 
              email={content.contactEmail} 
            />
          </>
        ) : (
          <Admin 
            content={content} 
            setContent={setContent} 
            onClose={() => navigateTo('home')} 
          />
        )}
      </main>

      <Footer onAdminClick={() => navigateTo('admin')} />
    </div>
  );
};

export default App;
