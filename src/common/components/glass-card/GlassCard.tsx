interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
  return (
    <section className={`relative bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-lg ${className}`}>
      {children}
    </section>
  );
};

export default GlassCard;