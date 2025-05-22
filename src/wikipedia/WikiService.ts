import axios from "axios";

const DEFAULT_HEADERS = {
    headers: {
        "Accept": "text/html",
    },
};

const ENDPOINT = {
    search: "https://es.wikipedia.org/w/api.php",
    mobileHTML: (encodedTitle: string) => `https://es.m.wikipedia.org/api/rest_v1/page/mobile-html/${encodedTitle}`
};

export const searchWikipediaArticles = async (query: string): Promise<string[]> => {
    const params = {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
        origin: "*",
    };

    try {
        const response = await axios.get(ENDPOINT.search, { params });
        const data = response.data;
        if (!data.query?.search) return [];

        const articles = data.query.search.map((item: any) => item.title);
        return articles;
    } catch (error) {
        console.error("Error al buscar artículos:", error);
        return [];
    }
}

export const getWikipediaMobileHtml = async (articleTitle: string): Promise<string> => {
    const isAlreadyEncoded = articleTitle !== decodeURIComponent(articleTitle);
    const encodedTitle = isAlreadyEncoded ? articleTitle : encodeURIComponent(articleTitle);

    const finalUrl = ENDPOINT.mobileHTML(encodedTitle);
    try {
        const response = await axios.get(finalUrl, DEFAULT_HEADERS);
        const html = response.data;
        return html;
    } catch (error) {
        console.error("Error al obtener el HTML móvil del artículo:", error);
        console.error("URL que falló:", finalUrl);

        if (isAlreadyEncoded) {
            console.log("Intentando con decoding y re-encoding...");
            try {
                const decodedTitle = decodeURIComponent(articleTitle);
                const reEncodedTitle = encodeURIComponent(decodedTitle);
                const fallbackUrl = ENDPOINT.mobileHTML(reEncodedTitle);
                console.log("Fallback URL:", fallbackUrl);

                const fallbackResponse = await axios.get(fallbackUrl, DEFAULT_HEADERS);
                return fallbackResponse.data;
            } catch (fallbackError) {
                console.error("Fallback también falló:", fallbackError);
            }
        }

        return "";
    }
}