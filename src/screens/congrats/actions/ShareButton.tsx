import Button from "../../../common/components/button/Button";
import { formatTime } from "../../../common/utils/utils";
import useWikiGame from "../../../hooks/game/useWikiGame";

const ShareButton: React.FC = () => {
  const { first, last, gameState } = useWikiGame();

  const copyInClipboard = () => {
    const text = `¡Conecté ${first} con ${last} en ${gameState.clickCount} clics y ${formatTime(gameState.gameDuration)}!`;
    navigator.clipboard.writeText(text)
      .then(() => alert("¡Resultados copiados al portapapeles!"))
      .catch(() => alert("No se pudo copiar al portapapeles"));
  };

  return (
    <Button onClick={copyInClipboard}>
      Compartir resultados
    </Button>
  );
};

export default ShareButton;
