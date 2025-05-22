export enum WikiGameActionTypes {
    SET_LOADING = 'SET_LOADING',
    START_GAME = 'START_GAME',
    SET_CONTENT = 'SET_CONTENT',
    HANDLE_CLICK = 'HANDLE_CLICK',
    WIN_GAME = 'WIN_GAME',
    SET_ERROR = 'SET_ERROR',
    CLEAR_ERROR = 'CLEAR_ERROR',
    RESET_GAME = 'RESET_GAME',
}

export type WikiGameAction =
    | { type: WikiGameActionTypes.SET_LOADING; payload: boolean }
    | { type: WikiGameActionTypes.START_GAME; payload: { startArticle: string; destination: string } }
    | { type: WikiGameActionTypes.SET_CONTENT; payload: { htmlContent: string; currentArticle: string } }
    | { type: WikiGameActionTypes.HANDLE_CLICK; payload: string }
    | { type: WikiGameActionTypes.WIN_GAME }
    | { type: WikiGameActionTypes.SET_ERROR; payload: string }
    | { type: WikiGameActionTypes.CLEAR_ERROR }
    | { type: WikiGameActionTypes.RESET_GAME };

export const wikiGameActions = {
    setLoading: (isLoading: boolean): WikiGameAction => ({
        type: WikiGameActionTypes.SET_LOADING,
        payload: isLoading,
    }),

    startGame: (startArticle: string, destination: string): WikiGameAction => ({
        type: WikiGameActionTypes.START_GAME,
        payload: { startArticle, destination },
    }),

    setContent: (htmlContent: string, currentArticle: string): WikiGameAction => ({
        type: WikiGameActionTypes.SET_CONTENT,
        payload: { htmlContent, currentArticle },
    }),

    handleClick: (articleName: string): WikiGameAction => ({
        type: WikiGameActionTypes.HANDLE_CLICK,
        payload: articleName,
    }),

    winGame: (): WikiGameAction => ({
        type: WikiGameActionTypes.WIN_GAME,
    }),

    setError: (error: string): WikiGameAction => ({
        type: WikiGameActionTypes.SET_ERROR,
        payload: error,
    }),

    clearError: (): WikiGameAction => ({
        type: WikiGameActionTypes.CLEAR_ERROR,
    }),

    resetGame: (): WikiGameAction => ({
        type: WikiGameActionTypes.RESET_GAME,
    }),
};