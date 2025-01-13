import axios from 'axios';

const DEFAULT_HEADERS = {
    headers: {
        'Accept': 'text/html',
    },
};

const Endpoint = {
    search: 'https://es.wikipedia.org/w/api.php',
    mobileHTML: (encodedTitle: string) => `https://es.m.wikipedia.org/api/rest_v1/page/mobile-html/${encodedTitle}`;
};


export const searchWikipediaArticles = async (query: string): Promise<string[]> => {
    const params = {
        action: 'query',
        list: 'search',
        srsearch: query,
        format: 'json',
        origin: '*',
    };

    try {
        const response = await axios.get(Endpoint.search, { params });
        const data = response.data;
        if (!data.query?.search) return [];

        const articles = data.query.search.map((item: any) => item.title);
        return articles;
    } catch (error) {
        console.error('Error al buscar artículos:', error);
        return [];
    }
}

export const getWikipediaMobileHtml = async (articleTitle: string): Promise<string> => {
    const encodedTitle = encodeURIComponent(articleTitle);
    try {
        const response = await axios.get(Endpoint.mobileHTML(encodedTitle), DEFAULT_HEADERS);
        const html = response.data;
        return html;
    } catch (error) {
        console.error('Error al obtener el HTML móvil del artículo:', error);
        return '';
    }
}