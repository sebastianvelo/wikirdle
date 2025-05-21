import React, { createContext } from 'react';

export interface WikiGameState {
  clickCount: number;
  gamePath: string[];
  destination: string;
  htmlContent: string;
  isLoading: boolean;
  gameStartTime: Date;
  gameDuration: number;
  hasWon: boolean;
}

export interface WikiGameContextType {
  gameState: WikiGameState;
  currentArticle: string | undefined;
  startGame: (startArticle: string, destination: string) => void;
  handleLinkClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  resetGame: () => void;
  isGameActive: boolean;
  first?: string;
  last?: string;
}

const WikiGameContext = createContext<WikiGameContextType | undefined>(undefined);

export default WikiGameContext;