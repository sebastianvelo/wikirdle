import React from "react";
import { useNavigate } from "react-router-dom";
import { ScreenPath } from "../../../common/utils/utils";
import useWikiGame from "../../../hooks/useWikiGame";

const PlayAgainButton: React.FC = () => {
  const navigate = useNavigate();
  const { first, last } = useWikiGame();

  const playAgain = () => {
    const encodedStart = encodeURIComponent(first!.split(" ").join("_"));
    navigate(`${ScreenPath.getWiki(encodedStart, last!)}`);
  };

  return (
    <button onClick={playAgain} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors">
      Jugar de nuevo (mismos artículos)
    </button>
  );
};

export default PlayAgainButton;