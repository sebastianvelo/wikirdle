import { formatTime } from "../../../common/utils/utils";
import useWikiGame from "../../../hooks/useWikiGame";

const ShareButton: React.FC = () => {
  const { first, last, gameState } = useWikiGame();

  const copyInClipboard = () => {
    const text = `¡Conecté ${first} con ${last} en ${gameState.clickCount} clics y ${formatTime(gameState.gameDuration)}!`;
    navigator.clipboard.writeText(text)
      .then(() => alert("¡Resultados copiados al portapapeles!"))
      .catch(() => alert("No se pudo copiar al portapapeles"));
  };

  return (
    <div className="text-center pt-2">
      <button onClick={copyInClipboard} className="text-sm text-blue-400 hover:text-blue-300">
        Compartir resultados
      </button>
    </div>
  );
};

export default ShareButton;
