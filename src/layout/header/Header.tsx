import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

const Header: React.FC = () => {
    return (
        <header className="bg-white/50 dark:bg-black/40 backdrop-blur-sm py-4 px-6 border-b border-blue-800/50 shadow-lg">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-bold text-blue-300 font-lakki-reddy pt-4">Wikirdle</h1>
                {/*<div className="flex gap-x-4">
                    <button className="text-blue-300 hover:text-white transition-colors">Rankings</button>
                    <button className="text-blue-300 hover:text-white transition-colors">Perfil</button>
                    <button className="text-blue-300 hover:text-white transition-colors">Ayuda</button>
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