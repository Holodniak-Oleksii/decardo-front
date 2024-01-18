import { FC } from "react";
import { ThemeProvider } from "styled-components";
import { IThemeProvider } from "./types";

const Theme: FC<IThemeProvider> = (props) => {
  const { children } = props;
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

export default Theme;
