import React from "react";
import LoadingSpin from "../../common/components/loading/LoadingSpin";
import useWikiGame from "../../hooks/game/useWikiGame";
import WikiFrame from "./frame/WikiFrame";
import GameHeader from "./header/GameHeader";

const GameScreen: React.FC = () => {
  const { gameState } = useWikiGame();

  return (
    <div className="flex flex-col h-screen">
      <GameHeader />
      <main className="flex-1 flex relative overflow-hidden">
        <WikiFrame />
      </main>
      <LoadingSpin isLoading={gameState.isLoading} />
    </div>
  );
};

export default GameScreen;
