import { FC } from "react";
import { Footer, Header } from "./components";
import { ILayoutProps } from "./types";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div
        style={{
          height: "400px",
        }}
      />
      {/* {children} */}
      <Footer />
    </>
  );
};

export default Layout;
