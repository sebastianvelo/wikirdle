import React from "react";
import Icons from "../../../common/icons/Icons";
import useWikiGame from "../../../hooks/game/useWikiGame";
import GameStat from "./GameStat";

interface GameStatsProps {
  toggleShowPath: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ toggleShowPath }) => {
  const { gameState, resetGame } = useWikiGame();

  return (
    <div className="flex items-center gap-6 justify-between md:justify-end w-full">
      <div className="flex gap-4">
        <GameStat label="Destino" value={gameState.destination} />
        <GameStat label="Clicks" value={gameState.clickCount} />
      </div>
      <div className="flex gap-2">
        <button onClick={toggleShowPath} className="p-2 rounded-full hover:bg-primary-800/50 transition-colors" title="Ver ruta">
          <Icons.Hamburger />
        </button>
        <button onClick={resetGame} className="p-2 rounded-full hover:bg-primary-800/50 transition-colors" title="Reiniciar juego">
          <Icons.Reset />
        </button>
      </div>
    </div>
  );
};

export default GameStats;