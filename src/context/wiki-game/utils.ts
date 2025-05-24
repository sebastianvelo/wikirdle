export const stripTags = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const tagsToRemove = ["sup", "figure"];
  tagsToRemove.forEach(tag => {
    doc.querySelectorAll(tag).forEach(el => el.remove());
  });
  return doc.body.innerHTML;
};

export const normalizeArticleName = (articleName: string): string => {
  return articleName.trim().replace(/_/g, " ");
};

export const extractArticleFromAnchor = (anchor: HTMLAnchorElement): string => {
  const url = new URL(anchor.href);
  const clickedArticle = decodeURIComponent(url.pathname.split("/").pop() ?? "");
  return normalizeArticleName(clickedArticle);
};