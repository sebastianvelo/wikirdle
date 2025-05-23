import GlassCard from "@common/components/glass-card/GlassCard";
import InstructionItem from "@common/components/instruction-item/InstructionItem";
import I18n from "@context/language/common/I18nKeys";
import useI18N from "@hooks/app/useI18N";

const GameInstructions: React.FC = () => {
  const { t, tlist } = useI18N();

  return (
    <GlassCard>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-950 dark:text-primary-300 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {t(I18n.START.INSTRUCTIONS.TITLE)}
        </h2>
        <div className="space-y-4">
          {tlist(I18n.START.INSTRUCTIONS.ITEMS).map((instruction, key) => (
            <InstructionItem number={key + 1}>
              {instruction}
            </InstructionItem>
          ))}
        </div>
      </div>
    </GlassCard>
  );
};

export default GameInstructions;
