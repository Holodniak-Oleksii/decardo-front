import { FC } from "react";
import { Footer, Header } from "./components";
import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ pageProps, children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
