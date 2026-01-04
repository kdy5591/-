
import React, { useState, useEffect } from 'react';
import { Project } from './types.ts';
import { INITIAL_PROJECTS } from './constants.tsx';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import FeaturedWorks from './components/FeaturedWorks.tsx';
import TrustStats from './components/TrustStats.tsx';
import PortfolioGrid from './components/PortfolioGrid.tsx';
import CaseStudyDetail from './components/CaseStudyDetail.tsx';
import Process from './components/Process.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Admin from './components/Admin.tsx';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    const savedProjects = localStorage.getItem('vls_projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    } else {
      setProjects(INITIAL_PROJECTS);
      localStorage.setItem('vls_projects', JSON.stringify(INITIAL_PROJECTS));
    }
  }, []);

  const handleUpdateProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('vls_projects', JSON.stringify(updatedProjects));
  };

  const handleHomeClick = () => {
    setSelectedProjectId(null);
    setIsAdminOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (sectionId: string) => {
    setSelectedProjectId(null);
    setIsAdminOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  return (
    <div className="relative min-h-screen bg-[#FAFAFA] text-[#1A1A1A]">
      <Navbar 
        onAdminClick={() => setIsAdminOpen(true)} 
        onHomeClick={handleHomeClick} 
        onNavClick={handleNavClick}
      />
      
      <main className="pt-20">
        <Hero />
        <FeaturedWorks projects={projects.filter(p => p.isFeatured)} onProjectClick={setSelectedProjectId} />
        <TrustStats />
        <PortfolioGrid projects={projects} onProjectClick={setSelectedProjectId} />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer onNavClick={handleNavClick} />

      {selectedProject && (
        <CaseStudyDetail 
          project={selectedProject} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}

      {isAdminOpen && (
        <Admin 
          projects={projects} 
          onUpdate={handleUpdateProjects} 
          onClose={() => setIsAdminOpen(false)} 
        />
      )}

      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <button 
          onClick={() => handleNavClick('contact')}
          className="bg-[#1A1A1A] text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all font-medium flex items-center gap-2"
        >
          <span>프로젝트 문의하기</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default App;