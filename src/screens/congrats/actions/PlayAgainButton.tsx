import React from "react";
import Button from "../../../common/components/button/Button";
import useWikiGame from "../../../hooks/game/useWikiGame";

const PlayAgainButton: React.FC = () => {
  const { replayGame } = useWikiGame();

  return (
    <Button onClick={replayGame}>
      Jugar de nuevo
    </Button>
  );
};

export default PlayAgainButton;