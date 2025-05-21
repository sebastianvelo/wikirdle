import React from "react";
import useWikiGame from "../../../hooks/game/useWikiGame";

const WikiFrame: React.FC = () => {
  const { gameState, handleLinkClick } = useWikiGame();

  return (
    <>
      {!gameState.isLoading && (
        <div
          id="wiki"
          className="w-full h-full bg-white text-black overflow-y-auto shadow-inner scrollbar-thin scrollbar-thumb-primary-500 scrollbar-track-gray-200 lg:w-3/4 lg:mx-auto border-x border-primary-900/20 p-4"
          onClick={handleLinkClick}
          dangerouslySetInnerHTML={{ __html: gameState.htmlContent }}
        ></div>
      )}
    </>
  );
};

export default WikiFrame;