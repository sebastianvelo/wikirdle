import React from "react";
import GlassCard from "../../common/components/glass-card/GlassCard";
import { formatTime } from "../../common/utils/utils";
import useWikiGame from "../../hooks/game/useWikiGame";

const CongratsStats: React.FC = () => {
  const { gameState, isGameActive } = useWikiGame();

  const getPerformanceMessage = (): string => {
    const clickCount = gameState.clickCount;
    if (clickCount <= 3) return "¡Impresionante! Eres un maestro de Wikipedia.";
    if (clickCount <= 6) return "¡Excelente trabajo! Conoces bien tu camino.";
    if (clickCount <= 10) return "¡Bien hecho! Tu conocimiento te llevó al destino.";
    return "¡Lo lograste! Sigue practicando para mejorar tu puntuación.";
  };

  if (!isGameActive || gameState.gamePath.length === 0) {
    return (
      <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center dark:bg-gray-900 dark:text-white">
        Cargando...
      </div>
    );
  }

  const startArticle = gameState.gamePath[0];
  const endArticle = gameState.gamePath[gameState.gamePath.length - 1];

  return (
    <>
      <div className="text-center">
        <p className="text-2xl mb-2 text-gray-900 dark:text-white">
          Encontraste el camino de
          <span className="font-bold text-yellow-600 dark:text-yellow-400">{startArticle}</span> a
          <span className="font-bold text-yellow-600 dark:text-yellow-400">{endArticle}</span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">{getPerformanceMessage()}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <GlassCard className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">Número de clics</p>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{gameState.clickCount}</p>
        </GlassCard>
        <GlassCard className="p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">Tiempo total</p>
          <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">{formatTime(gameState.gameDuration)}</p>
        </GlassCard>
      </div>
    </>
  );
};

export default CongratsStats;