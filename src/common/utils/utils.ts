export const ScreenPath = {
  home: "/",
  congrats: "/congrats",
  wiki: `/wiki/:article`,
  getWiki: (origin: string, destination: string) => {
    const originPath = `/wiki/${encodeURIComponent(origin)}`;
    const destinationParam = `destination=${encodeURIComponent(destination)}`;
    return `${originPath}?${destinationParam}`;
  },
};

export const Params = {
  gamePath: "gamePath",
  clickCount: "clickCount",
  gameDuration: "duration"
};

export const formatTime = (seconds: number): string => {
  if (seconds < 60) return `${seconds} segundos`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes} minuto${minutes > 1 ? 's' : ''} y ${remainingSeconds} segundo${remainingSeconds !== 1 ? 's' : ''}`;
};