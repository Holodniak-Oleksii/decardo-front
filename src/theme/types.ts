import { IPallette } from "./colors/types";

interface ITextSettings {
  color: string;
  weight: number;
  size: number;
}

export interface IGeneralTheme {
  text: {
    overflow: string;
    getLineClamp: (lines: number) => string;
    getDefault: (settings?: Partial<ITextSettings>) => string;
  };
  absoluteCenter: string;
  flex: {
    center: string;
    row: string;
    column: string;
    between: string;
  };
  content: {
    mainContainerPadding: `
      padding: 0 120px 0 120px;
      @media screen and (max-width: 1920px) {
        padding: 0 6.3vw;
      }
      @media screen and (max-width: 1440px) {
        padding: 0 7vw;
      }
      @media screen and (max-width: 1280px) {
        padding: 0 40px;
      }
      @media screen and (max-width: 767px) {
        padding: 0 16px;
      }
    `;
    headerSpace: `
      padding-top: 104px;
      @media screen and (max-width: 1280px) {
        padding-top: 80px; 
      }
      @media screen and (max-width: 540px) {
        padding-top: 76px; 
      }
    `;
    mainContainerWidth: `
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      position: relative;
    `;
  };
}

export interface ITheme extends IGeneralTheme {
  colors: IPallette;
  boxShadow: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xl2: string;
    xl3: string;
    xl4: string;
  };
}
