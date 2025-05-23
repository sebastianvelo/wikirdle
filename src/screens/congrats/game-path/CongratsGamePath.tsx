import GamePathBreadcrumb from "@common/components/breadcrumb/GamePathBreadcrumb";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";

const CongratsGamePath: React.FC = () => {
  const { t } = useI18N();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 dark:text-white">{t(I18n.CONGRATS.GAME_PATH_TITLE)}</h2>
      <GamePathBreadcrumb />
    </div>
  );
};

export default CongratsGamePath;