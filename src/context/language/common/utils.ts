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