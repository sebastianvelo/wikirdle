import GlassCard from "@common/components/glass-card/GlassCard";
import Icons from "@common/icons/Icons";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";
import InstructionItem from "@screens/start/game-instructions/InstructionItem";

const GameInstructions: React.FC = () => {
  const { t, tlist } = useI18N();

  return (
    <GlassCard className="isolate hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-200 p-6">
      <details>
        <summary className="list-none cursor-pointer focus:outline-none p-0">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-secondary-200 flex items-center">
            <Icons.Info />
            {t(I18n.START.INSTRUCTIONS.TITLE)}
          </h2>
        </summary>
        <div className="mt-6">
          <div className="space-y-4">
            {tlist(I18n.START.INSTRUCTIONS.ITEMS).map((instruction, key) => (
              <InstructionItem key={instruction} number={key + 1}>
                {instruction}
              </InstructionItem>
            ))}
          </div>
        </div>
      </details>
    </GlassCard>
  );
};

export default GameInstructions;
