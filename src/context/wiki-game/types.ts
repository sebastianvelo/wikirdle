import { Locale } from "@context/language/types/types";

export interface WikiGameState {
    isLoading: boolean;
    htmlContent: string;
    currentArticle: string;
    destination: string;
    gamePath: string[];
    clickCount: number;
    gameStartTime: number | null;
    gameDuration: number | null;
    hasWon: boolean;
    error: string | null;
    lang?: Locale;
    lastGameConfig: {
        startArticle: string;
        destination: string;
        lang: Locale;
    } | null;
}

export interface WikiGameContextType {
    state: WikiGameState;
    startGame: (startArticle: string, destination: string, lang: Locale) => Promise<void>;
    handleLinkClick: (event: React.MouseEvent<HTMLElement>) => Promise<void>;
    resetGame: () => void;
    replayGame: () => Promise<void>;
    clearError: () => void;
}

export interface GameConfig {
    startArticle: string;
    destination: string;
}
