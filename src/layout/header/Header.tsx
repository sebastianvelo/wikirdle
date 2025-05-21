import Brand from "../../common/components/brand/Brand";
import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

const Header: React.FC = () => {
    return (
        <header className="bg-white/80 dark:bg-black/40 backdrop-blur-sm py-4 px-6 border-b border-primary-200/50 dark:border-primary-800/50 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Brand />
                {/*<div className="flex gap-x-4">
                    <button className="text-primary-950 dark:text-primary-300 hover:text-white transition-colors">Rankings</button>
                    <button className="text-primary-950 dark:text-primary-300 hover:text-white transition-colors">Perfil</button>
                    <button className="text-primary-950 dark:text-primary-300 hover:text-white transition-colors">Ayuda</button>
                </div>*/}
                <div className="space-x-4 flex items-center justify-center">
                    <LanguageSelector />
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    );
};

export default Header;