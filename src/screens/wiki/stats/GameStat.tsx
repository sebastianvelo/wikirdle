interface GameStatProps {
  label: string;
  value: string | number;
}

const GameStat: React.FC<GameStatProps> = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="text-xs text-primary-300">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  );
};

export default GameStat;