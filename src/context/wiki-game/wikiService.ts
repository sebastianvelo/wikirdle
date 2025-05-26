import axios from "axios";

const DEFAULT_HEADERS = {
    headers: {
        "Accept": "text/html",
    },
};

const WIKIPEDIA_DOMAINS = {
    es: "es.wikipedia.org",
    en: "en.wikipedia.org",
    pt: "pt.wikipedia.org",
    it: "it.wikipedia.org",
    fr: "fr.wikipedia.org"
} as const;

type SupportedLanguage = keyof typeof WIKIPEDIA_DOMAINS;

const getEndpoints = (language: SupportedLanguage) => ({
    search: `https://${WIKIPEDIA_DOMAINS[language]}/w/api.php`,
    mobileHTML: (encodedTitle: string) => `https://${language}.m.wikipedia.org/api/rest_v1/page/mobile-html/${encodedTitle}`
});

export const searchWikipediaArticles = async (query: string, language: SupportedLanguage = "es"): Promise<string[]> => {
    const endpoints = getEndpoints(language);
    const params = {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
        origin: "*",
    };

    try {
        const response = await axios.get(endpoints.search, { params });
        const data = response.data;
        if (!data.query?.search) return [];

        const articles = data.query.search.map((item: any) => item.title);
        return articles;
    } catch (error) {
        console.error(`Error al buscar artículos en ${language}:`, error);
        return [];
    }
};

export const getWikipediaMobileHtml = async (articleTitle: string, language: SupportedLanguage = "es"): Promise<string> => {
    const endpoints = getEndpoints(language);
    const isAlreadyEncoded = articleTitle !== decodeURIComponent(articleTitle);
    const encodedTitle = isAlreadyEncoded ? articleTitle : encodeURIComponent(articleTitle);

    const finalUrl = endpoints.mobileHTML(encodedTitle);

    try {
        const response = await axios.get(finalUrl, DEFAULT_HEADERS);
        const html = response.data;
        return html;
    } catch (error) {
        console.error(`Error al obtener el HTML móvil del artículo en ${language}:`, error);
        console.error("URL que falló:", finalUrl);

        if (isAlreadyEncoded) {
            console.log("Intentando con decoding y re-encoding...");
            try {
                const decodedTitle = decodeURIComponent(articleTitle);
                const reEncodedTitle = encodeURIComponent(decodedTitle);
                const fallbackUrl = endpoints.mobileHTML(reEncodedTitle);
                console.log("Fallback URL:", fallbackUrl);

                const fallbackResponse = await axios.get(fallbackUrl, DEFAULT_HEADERS);
                return fallbackResponse.data;
            } catch (fallbackError) {
                console.error("Fallback también falló:", fallbackError);
            }
        }

        return "";
    }
};

export type { SupportedLanguage };
export { WIKIPEDIA_DOMAINS };