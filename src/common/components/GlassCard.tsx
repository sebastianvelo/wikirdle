import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <section className={`bg-blue-900/30 backdrop-blur-md rounded-xl border border-blue-700/40 shadow-lg overflow-hidden ${className}`}>
      {children}
    </section>
  );
};

export default GlassCard;