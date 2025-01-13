import axios from 'axios';

export const searchWikipediaArticles = async (query: string): Promise<string[]> => {
    const endpoint = 'https://es.wikipedia.org/w/api.php';
    const params = {
        action: 'query',
        list: 'search',
        srsearch: query,
        format: 'json',
        origin: '*', // Necesario para CORS si se usa en el navegador
    };

    try {
        const response = await axios.get(endpoint, { params });
        const data = response.data;

        if (data.query?.search) {
            // Extraer los títulos de los artículos encontrados
            const articles = data.query.search.map((item: any) => item.title);
            return articles;
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error al buscar artículos:', error);
        return [];
    }
}

export const getWikipediaMobileHtml = async (articleTitle: string): Promise<string> => {
    // Codificar el título del artículo para URL
    const encodedTitle = encodeURIComponent(articleTitle);

    const url = `https://es.m.wikipedia.org/api/rest_v1/page/mobile-html/${encodedTitle}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Accept': 'text/html',
            },
        });

        const html = response.data;
        return html;
    } catch (error) {
        console.error('Error al obtener el HTML móvil del artículo:', error);
        return '';
    }
}