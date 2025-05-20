import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-20 shadow-lg">
      {children}
    </div>
  );
};

export default GlassCard;