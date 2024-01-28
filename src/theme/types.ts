import { PropsWithChildren } from "react";

export interface IColorsProps {
  background: string;
}

export interface IConfigProps {
  text: {
    overflow: string;
    getLineClamp: (lines: number) => string;
  };
  absoluteCenter: string;
  flex: {
    center: string;
    row: string;
    column: string;
    between: string;
  };
  colors: IColorsProps;
  content: {
    mainContainerPadding: string;
    headerSpace: string;
    mainContainerWidth: string;
  };
}

export interface IThemeProvider extends PropsWithChildren {}
