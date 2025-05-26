import { WikiGameState } from "./types";
import { WikiGameAction, WikiGameActionTypes } from "./WikiGameActions";

export const initialState: WikiGameState = {
    isLoading: false,
    htmlContent: "",
    currentArticle: "",
    destination: "",
    gamePath: [],
    clickCount: 0,
    gameStartTime: null,
    gameDuration: null,
    hasWon: false,
    error: null,
    lastGameConfig: null,
    lang: undefined
};

export const wikiGameReducer = (state: WikiGameState, action: WikiGameAction): WikiGameState => {
    switch (action.type) {
        case WikiGameActionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload };

        case WikiGameActionTypes.START_GAME:
            return {
                ...state,
                currentArticle: action.payload.startArticle,
                destination: action.payload.destination,
                gamePath: [action.payload.startArticle],
                clickCount: 0,
                gameStartTime: Date.now(),
                gameDuration: null,
                hasWon: false,
                error: null,
                lang: action.payload.lang,
                lastGameConfig: {
                    startArticle: action.payload.startArticle,
                    destination: action.payload.destination,
                    lang: action.payload.lang
                },
            };

        case WikiGameActionTypes.SET_CONTENT:
            return {
                ...state,
                htmlContent: action.payload.htmlContent,
                currentArticle: action.payload.currentArticle,
                isLoading: false,
                error: null,
            };

        case WikiGameActionTypes.HANDLE_CLICK:
            const newPath = [...state.gamePath, action.payload];
            return {
                ...state,
                currentArticle: action.payload,
                gamePath: newPath,
                clickCount: state.clickCount + 1,
            };

        case WikiGameActionTypes.WIN_GAME:
            const duration = state.gameStartTime ? Math.floor((Date.now() - state.gameStartTime) / 1000) : 0;
            return {
                ...state,
                hasWon: true,
                gameDuration: duration,
            };

        case WikiGameActionTypes.SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };

        case WikiGameActionTypes.CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        case WikiGameActionTypes.RESET_GAME:
            return {
                ...initialState,
                lang: state.lastGameConfig?.lang,
                lastGameConfig: state.lastGameConfig,
            };

        default:
            return state;
    }
};