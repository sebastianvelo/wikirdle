import Button from "@common/components/button/Button";
import { formatTime } from "@common/utils/utils";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useWikiGame from "@hooks/game/useWikiGame";

const ShareButton: React.FC = () => {
  const { p } = useI18N();
  const { state } = useWikiGame();

  const copyInClipboard = () => {
    const text = p(I18n.CONGRATS.SHARE_CONTENT, [state.gamePath[0], state.destination, state.clickCount, formatTime(state.gameDuration ?? 0)]);
    navigator.clipboard.writeText(text)
      .then(() => alert("¡Resultados copiados al portapapeles!"))
      .catch(() => alert("No se pudo copiar al portapapeles"));
  };

  return (
    <Button onClick={copyInClipboard}>
      {I18n.CONGRATS.SHARE_BUTTON}
    </Button>
  );
};

export default ShareButton;
