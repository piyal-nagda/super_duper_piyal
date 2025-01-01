import React from 'react';
import { FloatingParticles } from '../landing/FloatingParticles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <FloatingParticles />
      {children}
    </div>
  );
};