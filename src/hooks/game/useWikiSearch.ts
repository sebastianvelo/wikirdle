import { searchWikipediaArticles } from "@context/wiki-game/wikiService";
import useLanguage from "@hooks/app/useLanguage";
import { useCallback, useState } from "react";

interface UseWikipediaSearchReturn {
    suggestions: string[];
    isLoading: boolean;
    error: string | null;
    searchArticles: (query: string) => Promise<void>;
    clearSuggestions: () => void;
    clearError: () => void;
}

const useWikiSearch = (minQueryLength: number = 3): UseWikipediaSearchReturn => {
    const { lang } = useLanguage();
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchArticles = useCallback(async (query: string) => {
        setError(null);

        if (query.length < minQueryLength) {
            setSuggestions([]);
            return;
        }

        setIsLoading(true);

        try {
            const results = await searchWikipediaArticles(query, lang);
            setSuggestions(results);
        } catch (err) {
            console.error("Error searching Wikipedia articles:", err);
            setError("Error al buscar artículos. Por favor, intenta de nuevo.");
            setSuggestions([]);
        } finally {
            setIsLoading(false);
        }
    }, [minQueryLength, lang]);

    const clearSuggestions = useCallback(() => {
        setSuggestions([]);
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        suggestions,
        isLoading,
        error,
        searchArticles,
        clearSuggestions,
        clearError
    };
};

export default useWikiSearch;