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
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <GlassCard className="lg:w-1/2 lg:mx-auto">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-primary-600 dark:text-primary-400">{t(I18n.CONGRATS.TITLE)}</h1>
            <div className="space-y-8">
              <CongratsStats />
              <CongratsGamePath />
              <CongratsActions />
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  );
};

export default CongratsScreen;