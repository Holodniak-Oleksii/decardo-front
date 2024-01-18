import { FC } from "react";
import { Main } from "./styles";
import { IGeneralLayoutProps } from "./types";

const GeneralLayout: FC<IGeneralLayoutProps> = ({ font, children }) => {
  return <Main className={font}>{children}</Main>;
};

export default GeneralLayout;
