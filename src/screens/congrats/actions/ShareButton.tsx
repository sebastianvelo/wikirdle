import Button from "@common/components/button/Button";
import { formatTime } from "@common/utils/utils";
import useWikiGame from "@hooks/game/useWikiGame";

const ShareButton: React.FC = () => {
  const { state } = useWikiGame();

  const copyInClipboard = () => {
    const text = `¡Conecté ${state.gamePath[0]} con ${state.destination} en ${state.clickCount} clics y ${formatTime(state.gameDuration ?? 0)}!`;
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
