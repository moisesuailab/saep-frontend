import ReactSwitch from "react-switch";
import { useTheme } from "../../shared/hooks/useTheme";

import { Container } from "./styles";

export const Header:React.FC = () => {
  const themes = useTheme();

  return (
    <Container>
      Hello World!
      <ReactSwitch
        onChange={themes.toggleTheme}
        checked={themes.theme.title === "dark"}
        uncheckedIcon={false}
        checkedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={`${themes.theme.colors.secondary}`}
        onColor={themes.theme.colors.tertiary}
      />
    </Container>
  );
};
