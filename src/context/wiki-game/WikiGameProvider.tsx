import { ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ScreenPath } from '../../common/utils/utils';
import { getWikipediaMobileHtml } from '../../wikipedia/WikiService';
import WikiGameContext, { WikiGameContextType, WikiGameState } from './WikiGameContext';

interface WikiGameProviderProps {
  children: ReactNode;
}

const WikiGameProvider: React.FC<WikiGameProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { article } = useParams<{ article: string }>();

  const [gameState, setGameState] = useState<WikiGameState>({
    clickCount: 0,
    gamePath: [],
    destination: '',
    htmlContent: '',
    isLoading: false,
    gameStartTime: new Date(),
    gameDuration: 0,
    hasWon: false
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dest = params.get('destination');

    if (dest) {
      setGameState(prev => ({
        ...prev,
        destination: dest
      }));
    }
  }, [location.search]);


  useEffect(() => {
    if (!article) return;

    if (gameState.gamePath.length === 0) {
      setGameState(prev => ({
        ...prev,
        gamePath: [decodeURIComponent(article).replace(/_/g, ' ')],
        gameStartTime: new Date(),
        clickCount: 0,
        hasWon: false
      }));
    }

    const fetchArticle = async () => {
      try {
        setGameState(prev => ({ ...prev, isLoading: true }));

        if (gameState.destination) {
          const normalizedArticle = decodeURIComponent(article).toLowerCase().replace(/_/g, ' ');
          const normalizedDestination = gameState.destination.toLowerCase().replace(/_/g, ' ');

          if (normalizedArticle === normalizedDestination && !gameState.hasWon) {
            const endTime = new Date();
            const duration = Math.floor((endTime.getTime() - gameState.gameStartTime.getTime()) / 1000);

            setGameState(prev => ({
              ...prev,
              isLoading: false,
              hasWon: true,
              gameDuration: duration
            }));

            navigate(ScreenPath.congrats);
            return;
          }
        }

        const pageContent = await getWikipediaMobileHtml(article);
        if (!pageContent) throw new Error("Article not found");

        const processedContent = pageContent.replace("<base ", "<base-disabled ");

        setGameState(prev => ({
          ...prev,
          htmlContent: processedContent,
          isLoading: false
        }));
      } catch (error) {
        console.error("Error fetching article:", error);
        setGameState(prev => ({ ...prev, isLoading: false }));
        navigate(ScreenPath.home);
      }
    };

    fetchArticle();
  }, [article, gameState.destination, gameState.gameStartTime, gameState.hasWon, navigate]);

  const startGame = async (startArticle: string, destination: string) => {
    try {
      setGameState(prev => ({
        ...prev,
        isLoading: true
      }));

      const encodedStart = encodeURIComponent(startArticle.split(' ').join('_'));

      if (startArticle.toLowerCase() === destination.toLowerCase()) {
        setGameState({
          clickCount: 0,
          gamePath: [startArticle],
          destination: destination,
          htmlContent: '',
          isLoading: false,
          gameStartTime: new Date(),
          gameDuration: 0,
          hasWon: true
        });

        navigate(ScreenPath.congrats);
        return;
      }

      const pageContent = await getWikipediaMobileHtml(encodedStart);
      if (!pageContent) throw new Error("Start article not found");

      const processedContent = pageContent.replace("<base ", "<base-disabled ");

      setGameState({
        clickCount: 0,
        gamePath: [startArticle],
        destination: destination,
        htmlContent: processedContent,
        isLoading: false,
        gameStartTime: new Date(),
        gameDuration: 0,
        hasWon: false
      });

      navigate(ScreenPath.getWiki(encodedStart, destination));
    } catch (error) {
      console.error("Error starting game:", error);
      setGameState(prev => ({ ...prev, isLoading: false }));
      navigate(ScreenPath.home);
    }
  };

  const handleLinkClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    const target = e.target as HTMLElement;
    const anchor = target.tagName === "A" ? target as HTMLAnchorElement :
      target.closest("a") as HTMLAnchorElement | null;

    if (!anchor || !anchor.href) return;

    if (anchor.href.includes("#")) {
      const url = new URL(anchor.href);
      if (url.hash && url.pathname === window.location.pathname) {
        return;
      }
    }

    setGameState(prev => ({
      ...prev,
      isLoading: true
    }));

    try {
      const url = new URL(anchor.href);
      const clickedArticle = decodeURIComponent(
        url.pathname.split("/").pop() ?? ""
      );

      const articleName = clickedArticle.split("_").join(" ");

      const normalizedClickedArticle = articleName.toLowerCase();
      const normalizedDestination = gameState.destination.toLowerCase().replace(/_/g, ' ');

      if (normalizedClickedArticle === normalizedDestination) {
        const endTime = new Date();
        const duration = Math.floor((endTime.getTime() - gameState.gameStartTime.getTime()) / 1000);

        setGameState(prev => ({
          ...prev,
          isLoading: false,
          hasWon: true,
          gameDuration: duration,
          clickCount: prev.clickCount + 1,
          gamePath: [...prev.gamePath, articleName]
        }));

        navigate(ScreenPath.congrats);
        return;
      }

      const pageContent = await getWikipediaMobileHtml(clickedArticle);
      if (!pageContent) throw new Error("Article not found");

      const processedContent = pageContent.replace("<base ", "<base-disabled ");

      setGameState(prev => {
        const newClickCount = prev.clickCount + 1;
        const newPath = [...prev.gamePath, articleName];

        return {
          ...prev,
          isLoading: false,
          htmlContent: processedContent,
          clickCount: newClickCount,
          gamePath: newPath,
        };
      });

      navigate(ScreenPath.getWiki(clickedArticle, gameState.destination));
    } catch (error) {
      console.error("Error processing link click:", error);
      setGameState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const resetGame = () => {
    setGameState({
      clickCount: 0,
      gamePath: [],
      destination: '',
      htmlContent: '',
      isLoading: false,
      gameStartTime: new Date(),
      gameDuration: 0,
      hasWon: false
    });

    navigate(ScreenPath.home);
  };

  const isGameActive = gameState.gamePath.length > 0 && gameState.destination !== '';

  const contextValue: WikiGameContextType = {
    gameState,
    currentArticle: article ? decodeURIComponent(article).replace(/_/g, ' ') : '',
    startGame,
    handleLinkClick,
    resetGame,
    isGameActive,
    first: gameState.gamePath[0],
    last: gameState.gamePath[gameState.gamePath.length - 1]
  };

  return (
    <WikiGameContext.Provider value={contextValue}>
      {children}
    </WikiGameContext.Provider>
  );
};

export default WikiGameProvider;