import { FC } from "react";
import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ children, pageProps }) => {
  return <>{children}</>;
};

export default Layout;
