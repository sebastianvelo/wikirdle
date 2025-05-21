import LanguageProvider from "./language/LanguageProvider";
import WikiGameProvider from "./wiki-game/WikiGameProvider";

interface AppProviderProps {
    children: React.ReactNode
}

const AppProvider = (props: AppProviderProps) => {
    return (
        <LanguageProvider>
            <WikiGameProvider>
                {props.children}
            </WikiGameProvider>
        </LanguageProvider>
    );
};

export default AppProvider;