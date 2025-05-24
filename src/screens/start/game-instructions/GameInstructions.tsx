import GlassCard from "@common/components/glass-card/GlassCard";
import InstructionItem from "@screens/start/game-instructions/InstructionItem";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";

const GameInstructions: React.FC = () => {
  const { t, tlist } = useI18N();

  return (
    <GlassCard className="isolate hover:bg-white/60 dark:hover:bg-black/60 transition-all duration-200 p-6">
      <details>
        <summary className="list-none cursor-pointer focus:outline-none p-0">
          <h2 className="text-2xl font-bold text-primary-900 dark:text-secondary-200 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
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
