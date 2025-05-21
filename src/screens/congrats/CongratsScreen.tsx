import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../../common/components/glass-card/GlassCard";
import { ScreenPath } from "../../common/utils/utils";
import useWikiGame from "../../hooks/game/useWikiGame";
import Header from "../../layout/header/Header";
import CongratsGamePath from "./CongratsGamePath";
import CongratsStats from "./CongratsStats";
import CongratsActions from "./actions/CongratsActions";

const CongratsScreen: React.FC = () => {
  const navigate = useNavigate();
  const { gameState, isGameActive } = useWikiGame();

  useEffect(() => {
    if (!isGameActive || !gameState.hasWon) {
      navigate(ScreenPath.home);
    }
  }, [isGameActive, gameState.hasWon, navigate]);

  if (!isGameActive || gameState.gamePath.length === 0) {
    return <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">Cargando...</div>;
  }

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen w-full items-center justify-center">
        <GlassCard className="lg:w-1/2 lg:mx-auto">
          <div className="p-8">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-400">¡Felicitaciones!</h1>
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