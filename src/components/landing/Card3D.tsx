import React from 'react';
import { motion } from 'framer-motion';

interface Card3DProps {
  onClick: () => void;
}

export const Card3D: React.FC<Card3DProps> = ({ onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative w-[300px] h-[400px] rounded-2xl cursor-pointer group perspective"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl transform-style-3d group-hover:rotate-y-180 transition-transform duration-1000">
        {/* Front of card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-2xl border border-primary/20">
          <div className="text-6xl mb-4">✨</div>
          <h3 className="text-2xl font-bold text-white mb-2">Welcome</h3>
          <p className="text-white/80">Click to Enter</p>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-2xl border border-secondary/20 rotate-y-180 [backface-visibility:hidden]">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Portfolio
          </h3>
          <p className="text-white/80 text-center px-6">
            Explore my journey through code and creativity
          </p>
        </div>
      </div>
    </motion.div>
  );
};