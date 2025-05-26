import { Language, LanguageProps, Locale } from '../types/types';

export const LangLS = "lang";

export const LANGUAGES: LanguageProps[] = [
    {
        code: Language.EN,
        label: "English",
        flag: "🇺🇸",
        nativeName: "English"
    },
    {
        code: Language.ES,
        label: "Español",
        flag: "🇪🇸",
        nativeName: "Español"
    },
    {
        code: Language.PT,
        label: "Português",
        flag: "🇧🇷",
        nativeName: "Português"
    },
    {
        code: Language.IT,
        label: "Italiano",
        flag: "🇮🇹",
        nativeName: "Italiano"
    },
    {
        code: Language.FR,
        label: "Français",
        flag: "🇫🇷",
        nativeName: "Français"
    },
];

export const getBrowserLanguage = (): Locale => {
    const browserLang = navigator.language.slice(0, 2).toLowerCase() as Locale;

    // Verificar si el idioma del navegador está soportado
    const supportedLanguages: Locale[] = ["en", "es", "pt", "it", "fr"];

    if (supportedLanguages.includes(browserLang)) {
        return browserLang;
    }

    // Fallback a inglés si no está soportado
    return Language.EN;
};

export const getInitialLanguage = (defLang?: Locale): Locale => {
    const storedLang = localStorage.getItem(LangLS) as Locale | null;

    // Verificar si el idioma almacenado es válido
    const validLanguages: Locale[] = ["en", "es", "pt", "it", "fr"];

    if (storedLang && validLanguages.includes(storedLang)) {
        return storedLang;
    }

    if (defLang && validLanguages.includes(defLang)) {
        return defLang;
    }

    return getBrowserLanguage();
};

// Función helper para obtener información de un idioma
export const getLanguageInfo = (code: Locale): LanguageProps | undefined => {
    return LANGUAGES.find(lang => lang.code === code);
};

// Función helper para validar si un código de idioma es válido
export const isValidLanguage = (code: string): code is Locale => {
    const validCodes: string[] = ["en", "es", "pt", "it", "fr"];
    return validCodes.includes(code);
};

/**
 * Reemplaza placeholders numéricos en un template por los valores de un array.
 * Sólo reconoce índices enteros >= 0.
 *
 * @param template - Cadena con placeholders como "{0}", "{1}", ...
 * @param data - Array cuyos elementos serán usados para sustituir.
 * @returns Cadena con los placeholders reemplazados.
 */
export const replacePlaceholders = (template: string, data: Array<string | number>): string => {
    return template.replace(/\{(\d+)\}/g, (match, group) => {
        const idx = Number(group);
        return idx < data.length && data[idx] !== undefined
            ? String(data[idx])
            : match;
    });
};