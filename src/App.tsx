import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./shared/hooks/usePersistedState";

import themes from "./styles/themes";

import { GlobalStyles } from "./styles/global";
import { Header } from "./components/Header";

export const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', themes.light);
  const toogleTheme = () => {
    setTheme(theme.title === "dark" ? themes.light : themes.dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header  toogleTheme={toogleTheme} />
      </div>
    </ThemeProvider>
  );
};
