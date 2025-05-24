interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <section className={`relative bg-secondary-100/30 dark:bg-secondary-950/50 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-lg ${className}`}>
      {children}
    </section>
  );
};

export default GlassCard;