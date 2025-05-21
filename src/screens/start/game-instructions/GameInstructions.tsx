import React from "react";
import GlassCard from "../../../common/components/glass-card/GlassCard";
import InstructionItem from '../../../common/components/instruction-item/InstructionItem';

const GameInstructions: React.FC = () => {
  return (
    <GlassCard>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-950 dark:text-primary-300 mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          ¿Cómo se juega?
        </h2>
        <div className="space-y-4">
          <InstructionItem number={1}>
            El objetivo del juego es llegar al artículo de Wikipedia destino desde el artículo origen.
          </InstructionItem>
          <InstructionItem number={2}>
            Debes hacerlo navegando por los <span className="text-primary-950 dark:text-primary-300 font-bold underline">links</span> que aparecen en los artículos.
          </InstructionItem>
          <InstructionItem number={3}>
            ¡Intentá llegar en la menor cantidad de clics posible!
          </InstructionItem>
        </div>
      </div>
    </GlassCard>
  );
};

export default GameInstructions;
