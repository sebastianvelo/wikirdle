import RoundedButton from "@common/components/button/RoundedButton";
import useDarkMode from "@hooks/app/useDarkMode";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton: React.FC = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <RoundedButton variant="primary" onClick={toggleDarkMode} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>
            {darkMode ? <Sun /> : <Moon />}
        </RoundedButton>
    );
};

export default ThemeToggleButton;