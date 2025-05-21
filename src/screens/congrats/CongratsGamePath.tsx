import React from "react";
import useWikiGame from "../../hooks/useWikiGame";
import GamePathBreadcrumb from "../common/breadcrumb/GamePathBreadcrumb";
import GlassCard from "../../common/components/GlassCard";

const CongratsGamePath: React.FC = () => {
  const { gameState } = useWikiGame();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Tu recorrido:</h2>
      <GlassCard className="p-3">
        <GamePathBreadcrumb gamePath={gameState.gamePath} />
      </GlassCard>
    </div>
  );
};

export default CongratsGamePath;