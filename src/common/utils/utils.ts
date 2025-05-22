export const ScreenPath = {
  home: "/",
  congrats: "/congrats",
  wiki: (startArticle: string, destination: string) =>
    `/wiki/${encodeURIComponent(startArticle)}/to/${encodeURIComponent(destination)}`,
  wikiPattern: "/wiki/:startArticle/to/:destination",
} as const;

export const RouteParams = {
  startArticle: "startArticle",
  destination: "destination",
} as const;

export const GameParams = {
  gamePath: "gamePath",
  clickCount: "clickCount",
  gameDuration: "duration",
  destination: "destination",
} as const;

export const formatTime = (seconds: number): string => {
  if (seconds < 60) return `${seconds} segundos`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minuto${minutes > 1 ? 's' : ''} y ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
};