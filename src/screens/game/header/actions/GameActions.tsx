import Icons from "@common/icons/Icons";
import useWikiGame from "@hooks/game/useWikiGame";

interface GameStatsProps {
  toggleShowPath: () => void;
}

const GameActions: React.FC<GameStatsProps> = ({ toggleShowPath }) => {
  const { replayGame } = useWikiGame();

  return (
    <div className="flex gap-2">
      <button
        onClick={toggleShowPath}
        className="p-2 rounded-full bg-gray-100 hover:bg-primary-800/50 dark:bg-gray-800 dark:hover:bg-primary-700/60 dark:text-white transition-colors"
        title="Ver ruta"
      >
        <Icons.Hamburger />
      </button>

      <button
        onClick={replayGame}
        className="p-2 rounded-full bg-gray-100 hover:bg-primary-800/50 dark:bg-gray-800 dark:hover:bg-primary-700/60 dark:text-white transition-colors"
        title="Reiniciar juego"
      >
        <Icons.Reset />
      </button>
    </div>
  );
};

export default GameActions;
