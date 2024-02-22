import { createContext, useCallback } from "react";
import { IThemeContextData, IThemeProvider } from "../@types/theme";
import themes from "../../styles/themes";
import { ThemeProvider, DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistedStateTheme";

export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const CustomThemeProvider = ({children}: IThemeProvider) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', themes.light);

    const toggleTheme = useCallback(() => {
        setTheme(theme.title === "dark" ? themes.light : themes.dark);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}