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
  clickCount: "clickCount"
};