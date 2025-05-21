import React, { useState } from "react";
import GlassCard from "../../common/components/glass-card/GlassCard";
import InputSearch from "./search/InputSearch";
import StartGameButton from "./search/StartGameButton";

const GameSearchCard: React.FC = () => {
  const [startArticle, setStartArticle] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <GlassCard>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-primary-950 dark:text-primary-300 mb-4">
          Seleccioná los artículos
        </h2>
        <div className="space-y-4">
          <InputSearch title="Origen" value={startArticle} changeValue={setStartArticle} />
          <InputSearch title="Destino" value={destination} changeValue={setDestination} />
          <StartGameButton startArticle={startArticle} destination={destination} />
        </div>
      </div>
    </GlassCard>
  );
};

export default GameSearchCard;
