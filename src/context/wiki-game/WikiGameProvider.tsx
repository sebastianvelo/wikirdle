import { ScreenPath } from "@common/utils/utils";
import { Locale } from "@context/language/types/types";
import { useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { WikiGameContextType } from "./types";
import { extractArticleFromAnchor, normalizeArticleName, stripTags } from "./utils";
import { wikiGameActions } from "./WikiGameActions";
import WikiGameContext from "./WikiGameContext";
import { initialState, wikiGameReducer } from "./WikiGameReducer";
import { getWikipediaMobileHtml } from "./wikiService";

interface WikiGameProviderProps {
  children: React.ReactNode
}

const WikiGameProvider: React.FC<WikiGameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(wikiGameReducer, initialState);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchArticleContent = async (articleTitle: string, lang = state.lang): Promise<void> => {
    const normalizedDestination = normalizeArticleName(state.destination);
    const normalizedClicked = normalizeArticleName(articleTitle);

    if (normalizedClicked === normalizedDestination) {
      dispatch(wikiGameActions.winGame());
      navigate(ScreenPath.congrats);
      return;
    }

    dispatch(wikiGameActions.setLoading(true));

    try {
      const htmlContent = await getWikipediaMobileHtml(articleTitle, lang);

      if (!htmlContent) {
        throw new Error(`No se pudo cargar el artículo: ${articleTitle}`);
      }

      const cleanedHtml = htmlContent
        .replace(/<link[^>]+meta\.wikimedia[^>]*>/g, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/g, "")
        .replace("<base ", "<base-dis ")
        .replace(/<body[^>]*>/, '<body style="margin:0;">');

      dispatch(wikiGameActions.setContent(stripTags(cleanedHtml), normalizeArticleName(articleTitle)));
    } catch (error) {
      console.error("Error fetching article:", error);
      dispatch(wikiGameActions.setError(`Error al cargar el artículo: ${articleTitle}`));
      navigate(ScreenPath.home);
    }
  };

  const startGame = async (startArticle: string, destination: string, lang: Locale): Promise<void> => {
    dispatch(wikiGameActions.startGame(startArticle, destination, lang));
    await fetchArticleContent(startArticle, lang);
    navigate(ScreenPath.wiki(encodeURIComponent(startArticle), encodeURIComponent(destination), lang));
  };

  const handleLinkClick = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const anchor = target.closest("a");

    if (!anchor) {
      return;
    }

    try {
      const clickedArticle = extractArticleFromAnchor(anchor);

      if (!clickedArticle) {
        console.warn("No se pudo extraer el nombre del artículo");
        return;
      }

      dispatch(wikiGameActions.handleClick(clickedArticle));

      await fetchArticleContent(clickedArticle);

    } catch (error) {
      console.error("Error handling link click:", error);
      dispatch(wikiGameActions.setError("Error al procesar el enlace clicado"));
    }
  };

  const resetGame = (): void => {
    dispatch(wikiGameActions.resetGame());
    navigate(ScreenPath.home);
  };

  const replayGame = async (): Promise<void> => {
    if (!state.lastGameConfig) {
      console.warn("No hay configuración de juego anterior para repetir");
      navigate(ScreenPath.home);
      return;
    }

    const { startArticle, destination, lang } = state.lastGameConfig;
    await startGame(startArticle, destination, lang);
  };

  const clearError = (): void => {
    dispatch(wikiGameActions.clearError());
  };

  useEffect(() => {
    const path = location.pathname;
    const gameRouteMatch = path.match(/^\/wiki\/([^\/]+)\/(.+)\/to\/(.+)$/);

    if (gameRouteMatch) {
      const [, lang, startArticle, endArticle] = gameRouteMatch as [string, Locale, string, string];
      const decodedStart = decodeURIComponent(startArticle);
      const decodedEnd = decodeURIComponent(endArticle);

      if (!state.htmlContent && !state.isLoading && !state.error) {
        dispatch(wikiGameActions.startGame(decodedStart, decodedEnd, lang));
        fetchArticleContent(decodedStart);
      }
    }
  }, [location.pathname, state.htmlContent, state.isLoading, state.error]);

  const contextValue: WikiGameContextType = {
    state,
    startGame,
    handleLinkClick,
    resetGame,
    replayGame,
    clearError,
  };

  return (
    <WikiGameContext.Provider value={contextValue}>
      {children}
    </WikiGameContext.Provider>
  );
};

export default WikiGameProvider;