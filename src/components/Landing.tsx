import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card3D } from './landing/Card3D';
import { FloatingParticles } from './landing/FloatingParticles';

export const Landing = () => {
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);
    setTimeout(() => {
      window.location.hash = '#home';
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <FloatingParticles />
      <AnimatePresence>
        {!isEntering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="mb-12"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Priyal Nagda
              </h1>
              <p className="text-white/80">Frontend Developer</p>
            </motion.div>

            <Card3D onClick={handleEnter} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};