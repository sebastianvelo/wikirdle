import Button from "@common/components/button/Button";
import I18n from "@context/language/common/I18nKeys";
import useWikiGame from "@hooks/game/useWikiGame";

const ResetGameButton: React.FC = () => {
  const { resetGame } = useWikiGame();

  return (
    <Button onClick={resetGame}>
      {I18n.CONGRATS.RESET_BUTTON}
    </Button>
  );
};

export default ResetGameButton;