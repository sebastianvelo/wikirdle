import { Moon, Sun } from "lucide-react";
import useDarkMode from "@hooks/app/useDarkMode";

const ThemeToggleButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="p-2 rounded-lg dark:text-white bg-secondary-300 dark:bg-secondary-800 hover:bg-secondary-300 dark:hover:bg-secondary-700 transition-colors focus:outline-none" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Sun /> : <Moon />}
        </button>
    );
};

export default ThemeToggleButton;