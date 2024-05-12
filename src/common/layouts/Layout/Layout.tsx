import { FC } from "react";
import { Footer, Header } from "./components";
import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
