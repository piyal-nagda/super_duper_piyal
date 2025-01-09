import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { FloatingParticles } from './components/landing/FloatingParticles';

const App = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingParticles />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
