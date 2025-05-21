import React from "react";
import Icons from "../../../common/icons/Icons";
import GameStat from "./GameStat";

interface GameStatsProps {
  clickCount: number;
  destination: string;
  toggleShowPath: () => void;
  onReset: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ clickCount, destination, toggleShowPath, onReset }) => {
  return (
    <div className="flex items-center gap-6 justify-between md:justify-end w-full">
      <div className="flex gap-4">
        <GameStat label="Destino" value={destination} />
        <GameStat label="Clicks" value={clickCount} />
      </div>
      <div className="flex gap-2">
        <button onClick={toggleShowPath} className="p-2 rounded-full hover:bg-blue-800/50 transition-colors" title="Ver ruta">
          <Icons.Hamburger />
        </button>
        <button onClick={onReset} className="p-2 rounded-full hover:bg-blue-800/50 transition-colors" title="Reiniciar juego">
          <Icons.Reset />
        </button>
      </div>
    </div>
  );
};

export default GameStats;