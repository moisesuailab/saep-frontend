import ReactSwitch from "react-switch";
import { useTheme } from "styled-components";

import { Container } from "./styles";

interface IHeaderProps {
  toogleTheme: () => void;
}

export const Header:React.FC<IHeaderProps> = ({ toogleTheme }) => {
  const theme = useTheme();

  return (
    <Container>
      Hello World!
      <ReactSwitch
        onChange={toogleTheme}
        checked={theme.title === "dark"}
        uncheckedIcon={false}
        checkedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={`${theme.colors.primary}66`}
        onColor={theme.colors.secondary}
      />
    </Container>
  );
};
