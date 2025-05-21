import React from "react";
import LoadingSpin from "../../common/components/LoadingSpin";
import useWikiGame from "../../hooks/useWikiGame";
import GameHeader from "./GameHeader";
import WikiFrame from "./WikiFrame";

const GameScreen: React.FC = () => {
  const { gameState, handleLinkClick, resetGame } = useWikiGame();

  return (
    <div className="flex flex-col h-screen">
      <GameHeader clickCount={gameState.clickCount} destination={gameState.destination} onReset={resetGame} gamePath={gameState.gamePath} />
      <main className="flex-1 flex relative overflow-hidden">
        <WikiFrame htmlContent={gameState.htmlContent} handler={handleLinkClick} isLoading={gameState.isLoading} />
        <LoadingSpin isLoading={gameState.isLoading} />
      </main>
    </div>
  );
};

export default GameScreen;
