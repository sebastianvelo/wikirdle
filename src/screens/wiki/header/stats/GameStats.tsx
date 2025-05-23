import { formatTime } from "@common/utils/utils";
import useElapsedTime from "@hooks/game/useElapsedTime";
import useWikiGame from "@hooks/game/useWikiGame";
import GameStat from "./GameStat";

const GameStats: React.FC = () => {
  const { state } = useWikiGame();
  const elapsedSeconds = useElapsedTime(state.gameStartTime ?? 0);
  const formattedTime = formatTime(elapsedSeconds);

  return (
    <div className="flex flex-wrap gap-4">
      <GameStat label="Tiempo" value={formattedTime} />
      <GameStat label="Destino" value={state.destination} />
      <GameStat label="Clicks" value={state.clickCount} />
    </div>
  );
};

export default GameStats;
