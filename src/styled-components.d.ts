import { ITheme } from "./shared/@types/theme";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
