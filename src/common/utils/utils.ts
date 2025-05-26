export const ScreenPath = {
  home: "/",
  congrats: "/congrats",
  wiki: (startArticle: string, destination: string, lang: string) => `/wiki/${lang}/${encodeURIComponent(startArticle)}/to/${encodeURIComponent(destination)}`,
  wikiPattern: "/wiki/:lang/:startArticle/to/:destination",
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
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const microseconds = Math.floor((seconds % 1) * 1000000);

  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};