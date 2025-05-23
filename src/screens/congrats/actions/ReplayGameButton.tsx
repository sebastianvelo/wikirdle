import Button from "@common/components/button/Button";
import I18n from "@context/language/common/I18nKeys";
import useWikiGame from "@hooks/game/useWikiGame";

const ReplayGameButton: React.FC = () => {
  const { replayGame } = useWikiGame();

  return (
    <Button onClick={replayGame}>
      {I18n.CONGRATS.REPLAY_BUTTON}
    </Button>
  );
};

export default ReplayGameButton;