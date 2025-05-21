import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <section className={`bg-black/30 backdrop-blur-md border border-white/10 shadow-lg overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default GlassCard;