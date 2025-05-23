interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <section className={`relative bg-white/30 dark:bg-black/30 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg ${className}`}>
      {children}
    </section>
  );
};

export default GlassCard;