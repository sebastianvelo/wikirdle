export type Locale = "en" | "es" | "pt" | "it" | "fr";

export type Wordings = {
    [K in Locale]: {
        [key: string]: string | string[];
    };
};

export enum Language {
    EN = "en",
    ES = "es",
    PT = "pt",
    IT = "it",
    FR = "fr"
}

export type LanguageProps = {
    code: Language;
    label: string;
    flag: string;
    nativeName: string; // Nombre en el idioma nativo
}