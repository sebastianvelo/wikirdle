import { useEffect, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ScreenPath } from "../../common/utils/utils";
import { getWikipediaMobileHtml } from "../../wikipedia/WikiService";
import { WikiGameContextType } from "./types";
import { wikiGameActions } from "./WikiGameActions";
import WikiGameContext from "./WikiGameContext";
import { initialState, wikiGameReducer } from "./WikiGameReducer";

const WikiGameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(wikiGameReducer, initialState);
  const navigate = useNavigate();
  const location = useLocation();

  const normalizeArticleName = (articleName: string): string => {
    return articleName.trim().replace(/_/g, ' ');
  };

  const extractArticleFromAnchor = (anchor: HTMLAnchorElement): string => {
    const url = new URL(anchor.href);
    const clickedArticle = decodeURIComponent(url.pathname.split("/").pop() ?? "");
    return normalizeArticleName(clickedArticle);
  };

  const stripSupTags = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    doc.querySelectorAll('sup').forEach(el => el.remove());
    return doc.body.innerHTML;
  }

  const fetchArticleContent = async (articleTitle: string): Promise<void> => {
    const normalizedDestination = normalizeArticleName(state.destination);
    const normalizedClicked = normalizeArticleName(articleTitle);

    if (normalizedClicked === normalizedDestination) {
      dispatch(wikiGameActions.winGame());
      navigate(ScreenPath.congrats);
      return;
    }

    dispatch(wikiGameActions.setLoading(true));

    try {
      const htmlContent = await getWikipediaMobileHtml(articleTitle);

      if (!htmlContent) {
        throw new Error(`No se pudo cargar el artículo: ${articleTitle}`);
      }

      const processedContent = htmlContent.replace("<base ", "<base-dis ");
      dispatch(wikiGameActions.setContent(stripSupTags(processedContent), normalizeArticleName(articleTitle)));
    } catch (error) {
      console.error('Error fetching article:', error);
      dispatch(wikiGameActions.setError(`Error al cargar el artículo: ${articleTitle}`));
      navigate(ScreenPath.home);
    }
  };

  const startGame = async (startArticle: string, destination: string): Promise<void> => {
    dispatch(wikiGameActions.startGame(startArticle, destination));
    navigate(ScreenPath.wiki(encodeURIComponent(startArticle), encodeURIComponent(destination)));
    await fetchArticleContent(startArticle);
  };

  const handleLinkClick = async (event: React.MouseEvent<HTMLElement>): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const anchor = target.closest('a');

    if (!anchor) {
      return;
    }

    try {
      const clickedArticle = extractArticleFromAnchor(anchor);

      if (!clickedArticle) {
        console.warn('No se pudo extraer el nombre del artículo');
        return;
      }

      dispatch(wikiGameActions.handleClick(clickedArticle));

      await fetchArticleContent(clickedArticle);

    } catch (error) {
      console.error('Error handling link click:', error);
      dispatch(wikiGameActions.setError('Error al procesar el enlace clicado'));
    }
  };

  const resetGame = (): void => {
    dispatch(wikiGameActions.resetGame());
    navigate(ScreenPath.home);
  };

  const replayGame = async (): Promise<void> => {
    if (!state.lastGameConfig) {
      console.warn('No hay configuración de juego anterior para repetir');
      navigate(ScreenPath.home);
      return;
    }

    const { startArticle, destination } = state.lastGameConfig;
    await startGame(startArticle, destination);
  };

  const clearError = (): void => {
    dispatch(wikiGameActions.clearError());
  };

  useEffect(() => {
    const path = location.pathname;
    const gameRouteMatch = path.match(/^\/wiki\/(.+)\/to\/(.+)$/);

    if (gameRouteMatch) {
      const [, startArticle, endArticle] = gameRouteMatch;
      const decodedStart = decodeURIComponent(startArticle);
      const decodedEnd = decodeURIComponent(endArticle);

      if (!state.htmlContent && !state.isLoading && !state.error) {
        dispatch(wikiGameActions.startGame(decodedStart, decodedEnd));
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