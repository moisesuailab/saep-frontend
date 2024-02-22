import { AuthProvider } from "./shared/contexts/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";

import { GlobalStyles } from "./styles/global";
import { CustomThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <AuthProvider>
      <CustomThemeProvider>
        <BrowserRouter>
          <GlobalStyles />          
          <MainRoutes />
        </BrowserRouter>
      </CustomThemeProvider>
    </AuthProvider>
  );
};
