import { useState, useEffect } from "react";

type UseDarkMode = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

const useDarkMode = (): UseDarkMode => {
    const getInitialTheme = (): boolean => {
        const storedPreference = localStorage.getItem("theme");
        if (storedPreference !== null) {
            return storedPreference === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    };

    const [darkMode, setDarkMode] = useState<boolean>(getInitialTheme);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = (event: MediaQueryListEvent) => {
            if (localStorage.getItem("theme") === null) {
                setDarkMode(event.matches);
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return { darkMode, toggleDarkMode };
};

export default useDarkMode;