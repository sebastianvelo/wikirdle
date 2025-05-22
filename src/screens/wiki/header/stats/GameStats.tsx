// components/GameStats.tsx
import React from 'react';
import Icons from '../../../../common/icons/Icons';
import { formatTime } from '../../../../common/utils/utils';
import useElapsedTime from '../../../../hooks/game/useElapsedTime';
import useWikiGame from '../../../../hooks/game/useWikiGame';
import GameStat from './GameStat';

interface GameStatsProps {
  toggleShowPath: () => void;
}

const GameStats: React.FC<GameStatsProps> = ({ toggleShowPath }) => {
  const { state, resetGame } = useWikiGame();
  const elapsedSeconds = useElapsedTime(state.gameStartTime ?? 0);
  const formattedTime = formatTime(elapsedSeconds);

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 w-full">
      <div className="flex flex-wrap gap-4">
        <GameStat label="Tiempo" value={formattedTime} />
        <GameStat label="Destino" value={state.destination} />
        <GameStat label="Clicks" value={state.clickCount} />
      </div>

      <div className="flex gap-2">
        <button
          onClick={toggleShowPath}
          className="p-2 rounded-full bg-gray-100 hover:bg-primary-800/50 dark:bg-gray-800 dark:hover:bg-primary-700/60 dark:text-white transition-colors"
          title="Ver ruta"
        >
          <Icons.Hamburger />
        </button>

        <button
          onClick={resetGame}
          className="p-2 rounded-full bg-gray-100 hover:bg-primary-800/50 dark:bg-gray-800 dark:hover:bg-primary-700/60 dark:text-white transition-colors"
          title="Reiniciar juego"
        >
          <Icons.Reset />
        </button>
      </div>
    </div>
  );
};

export default GameStats;
