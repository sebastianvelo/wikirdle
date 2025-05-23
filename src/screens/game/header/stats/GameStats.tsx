import { formatTime } from "@common/utils/utils";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useElapsedTime from "@hooks/game/useElapsedTime";
import useWikiGame from "@hooks/game/useWikiGame";
import GameStat from "./GameStat";

const GameStats: React.FC = () => {
  const { t } = useI18N();
  const { state } = useWikiGame();
  const elapsedSeconds = useElapsedTime(state.gameStartTime ?? 0);
  const formattedTime = formatTime(elapsedSeconds);

  return (
    <div className="flex flex-wrap gap-4">
      <GameStat label={t(I18n.GAME.STATS.TIME)} value={formattedTime} />
      <GameStat label={t(I18n.GAME.STATS.DESTINATION)} value={state.destination} />
      <GameStat label={t(I18n.GAME.STATS.CLICKS)} value={state.clickCount} />
    </div>
  );
};

export default GameStats;
