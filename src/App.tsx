import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Landing } from './components/Landing';
import { FloatingParticles } from './components/landing/FloatingParticles';

const App = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#home') {
        setShowLanding(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      <FloatingParticles />
      {showLanding ? (
        <Landing />
      ) : (
        <div className="relative z-10">
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
};

export default App;