import { useContext } from "react";
import LanguageContext, { LanguageContextType } from "../../context/language/LanguageContext";

const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export default useLanguage;