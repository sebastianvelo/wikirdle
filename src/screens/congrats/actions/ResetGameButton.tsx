import React from "react";
import Button from "../../../common/components/button/Button";
import useWikiGame from "../../../hooks/game/useWikiGame";

const ResetGameButton: React.FC = () => {
  const { resetGame } = useWikiGame();

  return (
    <Button onClick={resetGame}>
      Nuevo juego
    </Button>
  );
};

export default ResetGameButton;