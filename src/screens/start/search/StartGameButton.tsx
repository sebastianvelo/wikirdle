import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useWikiGame from "@hooks/game/useWikiGame";

interface StartGameButtonProps {
  startArticle: string;
  destination: string;
}

const StartGameButton: React.FC<StartGameButtonProps> = ({ startArticle, destination }) => {
  const { t } = useI18N();
  const { startGame } = useWikiGame();

  const handleStartGame = () => {
    if (!startArticle || !destination) return;
    startGame(startArticle, destination);
  };

  return (
    <button
      onClick={handleStartGame}
      disabled={!origin || !destination}
      className="w-full bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 text-white font-bold py-4 px-6 rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mt-4 text-lg"
    >
      {t(I18n.START.START_BUTTON)}
    </button>
  );
};

export default StartGameButton;
