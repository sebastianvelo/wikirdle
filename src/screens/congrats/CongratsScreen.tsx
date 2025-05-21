import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlassCard from "../../common/components/GlassCard";
import { ScreenPath } from "../../common/utils/utils";
import useWikiGame from "../../hooks/useWikiGame";
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
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4">
      <GlassCard>
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
  );
};

export default CongratsScreen;