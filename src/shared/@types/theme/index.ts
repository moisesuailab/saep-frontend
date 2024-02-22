export interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string,
    quartenary: string,

    background: string;
    text: string;
  };
}

export interface IThemeContextData {
  toggleTheme: () => void;
  theme: ITheme;
}

export interface IThemeProvider {
  children: JSX.Element
}