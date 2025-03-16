import React, { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);
    const [active, setActive] = useState('home');
    const [isOpen, setIsOpen] = useState(false);

    const handleTheamChange = () => {
        setIsDark(!isDark);
    };


    const theme = {
        themeColor: isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
        shadow: isDark ? "bg-white/10 border-white/20" : 'bg-black/10 border-black/20'
    };

    const handleSetActive = (e) => {
        setActive(e.target.name);
    };

    const handleMenuBar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                handleTheamChange,
                active,
                handleSetActive,
                isOpen,
                handleMenuBar,
                theme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;