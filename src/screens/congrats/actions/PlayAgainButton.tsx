import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/components/button/Button";
import { ScreenPath } from "../../../common/utils/utils";
import useWikiGame from "../../../hooks/game/useWikiGame";

const PlayAgainButton: React.FC = () => {
  const navigate = useNavigate();
  const { first, last } = useWikiGame();

  const playAgain = () => {
    const encodedStart = encodeURIComponent(first!.split(" ").join("_"));
    navigate(`${ScreenPath.getWiki(encodedStart, last!)}`);
  };

  return (
    <Button onClick={playAgain}>
      Jugar de nuevo
    </Button>
  );
};

export default PlayAgainButton;