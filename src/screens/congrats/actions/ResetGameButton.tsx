import Button from "@common/components/button/Button";
import Icons from "@common/icons/Icons";
import useWikiGame from "@hooks/game/useWikiGame";

const ResetGameButton: React.FC = () => {
  const { resetGame } = useWikiGame();

  return (
    <Button onClick={resetGame}>
      <Icons.Home />
    </Button>
  );
};

export default ResetGameButton;