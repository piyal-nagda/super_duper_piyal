import React from 'react';
import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  // Increase number of particles for better effect
  const particles = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? '#0FE9FF' : i % 3 === 1 ? '#FF10F0' : '#39FF14',
            boxShadow: i % 3 === 0 
              ? '0 0 10px #0FE9FF, 0 0 20px #0FE9FF' 
              : i % 3 === 1 
                ? '0 0 10px #FF10F0, 0 0 20px #FF10F0'
                : '0 0 10px #39FF14, 0 0 20px #39FF14',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}