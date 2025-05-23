import RoundedButton from "@common/components/button/RoundedButton";
import Icons from "@common/icons/Icons";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useWikiGame from "@hooks/game/useWikiGame";

interface GameStatsProps {
  toggleShowPath: () => void;
}

const GameActions: React.FC<GameStatsProps> = ({ toggleShowPath }) => {
  const { t } = useI18N();
  const { replayGame, resetGame } = useWikiGame();

  return (
    <div className="flex gap-2">
      <RoundedButton onClick={replayGame} title={t(I18n.GAME.ACTIONS.REPLAY)} variant="primary">
        <Icons.Reset />
      </RoundedButton>
      <RoundedButton onClick={resetGame} title={t(I18n.GAME.ACTIONS.RESET)} variant="primary">
        <Icons.Home />
      </RoundedButton>
      <RoundedButton onClick={toggleShowPath} title={t(I18n.GAME.ACTIONS.PATH)} variant="primary">
        <Icons.Hamburger />
      </RoundedButton>
    </div>
  );
};

export default GameActions;
