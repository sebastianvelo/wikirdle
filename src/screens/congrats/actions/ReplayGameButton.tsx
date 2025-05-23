import Button from "@common/components/button/Button";
import Icons from "@common/icons/Icons";
import I18n from "@context/language/common/I18nKeys";
import useWikiGame from "@hooks/game/useWikiGame";

const ReplayGameButton: React.FC = () => {
  const { replayGame } = useWikiGame();

  return (
    <Button onClick={replayGame}>
      <Icons.Reset />
    </Button>
  );
};

export default ReplayGameButton;