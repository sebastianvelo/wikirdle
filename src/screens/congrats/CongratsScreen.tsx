import GlassCard from "@common/components/glass-card/GlassCard";
import LoadingSpin from "@common/components/loading/LoadingSpin";
import { ScreenPath } from "@common/utils/utils";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useWikiGame from "@hooks/game/useWikiGame";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../layout/header/Header";
import CongratsActions from "./actions/CongratsActions";
import CongratsGamePath from "./game-path/CongratsGamePath";
import CongratsStats from "./stats/CongratsStats";

const CongratsScreen: React.FC = () => {
  const { t } = useI18N();
  const { state } = useWikiGame();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.hasWon) {
      navigate(ScreenPath.home);
    }
  }, [state.hasWon, navigate]);

  if (state.gamePath.length === 0) {
    return <LoadingSpin isLoading={true} />;
  }

  return (
    <>
      <Header />
      <div className="flex-1 max-w-6xl w-full mx-auto lg:px-4 lg:py-8 flex flex-col justify-center">
        <GlassCard className="lg:w-1/2 lg:mx-auto lg:my-auto min-h-full p-6 lg:p-8 justify-center flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-center text-primary-600 dark:text-primary-400">{t(I18n.CONGRATS.TITLE)}</h1>
          <CongratsStats />
          <CongratsGamePath />
          <CongratsActions />
        </GlassCard>
      </div>
    </>
  );
};

export default CongratsScreen;