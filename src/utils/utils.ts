export const getWikiScreenPath = (origin: string, destination: string) => {
  const originPath = `/wiki/${encodeURIComponent(origin)}`;
  const destinationParam = `destination=${encodeURIComponent(destination)}`;
  return `${originPath}?${destinationParam}`;
};
