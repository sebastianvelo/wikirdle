import Brand from "@common/components/brand/Brand";
import LanguageSelector from "./actions/LanguageSelector";
import ThemeToggleButton from "./actions/ThemeToggleButton";

interface HeaderProps {
    showLangSelector?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showLangSelector = true }) => {
    return (
        <header className="bg-white/40 dark:bg-black/40 backdrop-blur-sm py-2 px-6 border-b border-primary-200/50 dark:border-primary-800/50 shadow-lg z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Brand />
                <div className="space-x-4 flex items-center justify-center">
                    {showLangSelector && <LanguageSelector />}
                    <ThemeToggleButton />
                </div>
            </div>
        </header>
    );
};

export default Header;