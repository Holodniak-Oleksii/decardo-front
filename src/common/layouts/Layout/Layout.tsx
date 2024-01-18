import { FC } from "react";
import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ children, pageProps }) => {
  return <div>{children}</div>;
};

export default Layout;
