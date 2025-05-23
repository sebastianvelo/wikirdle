import GlassCard from "@common/components/glass-card/GlassCard";
import LoadingSpin from "@common/components/loading/LoadingSpin";
import { formatTime } from "@common/utils/utils";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useWikiGame from "@hooks/game/useWikiGame";

const CongratsStats: React.FC = () => {
  const { t, p, } = useI18N();
  const { state } = useWikiGame();

  const getPerformanceMessage = (): string => {
    const clickCount = state.clickCount;
    if (clickCount <= 3) return t(I18n.CONGRATS.STATS.PERFORMANCE.BEST);
    if (clickCount <= 6) return t(I18n.CONGRATS.STATS.PERFORMANCE.GOOD);
    if (clickCount <= 10) return t(I18n.CONGRATS.STATS.PERFORMANCE.NORMAL);
    return t(I18n.CONGRATS.STATS.PERFORMANCE.DEFAULT);
  };

  if (state.gamePath.length === 0) {
    return (
      <LoadingSpin isLoading={true} />
    );
  }

  const startArticle = state.gamePath[0];
  const endArticle = state.gamePath[state.gamePath.length - 1];

  return (
    <>
      <div className="text-center">
        <p className="text-2xl mb-2 text-gray-900 dark:text-white text-center">
          {p(I18n.CONGRATS.STATS.TITLE, [startArticle, endArticle])}
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">{getPerformanceMessage()}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <GlassCard className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">{t(I18n.CONGRATS.STATS.CLICKS_TITLE)}</p>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{state.clickCount}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">{t(I18n.CONGRATS.STATS.TIME_TITLE)}</p>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{formatTime(state.gameDuration ?? 0)}</p>
        </GlassCard>
      </div>
    </>
  );
};

export default CongratsStats;