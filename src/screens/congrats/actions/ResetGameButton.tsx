import React from "react";
import useWikiGame from "../../../hooks/useWikiGame";

const ResetGameButton: React.FC = () => {
  const { resetGame } = useWikiGame();

  return (
    <button onClick={resetGame} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
      Nuevo juego
    </button>
  );
};

export default ResetGameButton;