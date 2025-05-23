import Button from "@common/components/button/Button";
import { formatTime } from "@common/utils/utils";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import useToast from "@hooks/components/useToast";
import useWikiGame from "@hooks/game/useWikiGame";
import { Share2 } from "lucide-react";

const ShareButton: React.FC = () => {
  const { p } = useI18N();
  const { state } = useWikiGame();
  const { showToast } = useToast();

  const copyInClipboard = () => {
    const text = p(I18n.CONGRATS.SHARE.CONTENT, [state.gamePath.join(" ➡️ "), state.clickCount, formatTime(state.gameDuration ?? 0)]);
    navigator.clipboard.writeText(text)
      .then(() => showToast(I18n.CONGRATS.SHARE.SUCCESS, "success"))
      .catch(() => showToast(I18n.CONGRATS.SHARE.ERROR, "error"));
  };

  return (
    <Button onClick={copyInClipboard}>
      <Share2 />
    </Button>
  );
};

export default ShareButton;
