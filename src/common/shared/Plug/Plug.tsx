import { FC, PropsWithChildren } from "react";

import { Wrapper } from "./styles";

const Plug: FC<PropsWithChildren> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default Plug;
