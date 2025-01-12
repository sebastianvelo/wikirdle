import React from 'react';

interface GlassmorphismCardProps {
  children: React.ReactNode;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({ children }) => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg border border-white border-opacity-20 shadow-lg p-6 md:w-2/3 lg:w-1/3">
      {children}
    </div>
  );
};

export default GlassmorphismCard;