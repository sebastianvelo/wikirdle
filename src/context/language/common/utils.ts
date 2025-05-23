import { Language, LanguageProps, Locale } from "../types/types";

export const LangLS = "lang";

export const LANGUAGES: LanguageProps[] = [
    { code: Language.EN, label: "English", flag: "🇺🇸" },
    { code: Language.ES, label: "Español", flag: "🇪🇸" },
];

export const getBrowserLanguage = (): Locale => {
    const browserLang = navigator.language.slice(0, 2).toLowerCase();
    return browserLang === Language.ES ? Language.ES : Language.EN;
};

export const getInitialLanguage = (defLang?: Locale): Locale => {
    const storedLang = localStorage.getItem(LangLS) as Locale | null;
    if (storedLang === Language.ES || storedLang === Language.EN) {
        return storedLang;
    }
    if (defLang === Language.ES || defLang === Language.EN) {
        return defLang;
    }
    return getBrowserLanguage();
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
        // Si existe el elemento en data, lo convierte a string; si no, devuelve el placeholder original.
        return idx < data.length && data[idx] !== undefined
            ? String(data[idx])
            : match;
    });
};