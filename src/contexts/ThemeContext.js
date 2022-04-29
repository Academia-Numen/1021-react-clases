import { createContext, useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const [isLightTheme, setIsLightTheme] = useState(true);

    const themeStyles = {
        color: isLightTheme ? '#555' : '#ddd',
        backgroundColor: isLightTheme ? '#eee' : '#555',
    }

    function toggleTheme() {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={ { themeStyles, toggleTheme } }>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;