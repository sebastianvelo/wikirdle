import Button from "@common/components/button/Button";
import useWikiGame from "@hooks/game/useWikiGame";
import { Home } from "lucide-react";

const ResetGameButton: React.FC = () => {
  const { resetGame } = useWikiGame();

  return (
    <Button onClick={resetGame}>
      <Home />
    </Button>
  );
};

export default ResetGameButton;