import { FC, PropsWithChildren } from "react";
import { Animation, Circle, Container, Relative, Wrapper } from "./styles";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Animation>
          <Relative>
            {[...Array(3)].map((_, i) => (
              <Circle key={i} index={i} />
            ))}
          </Relative>
        </Animation>
        {children}
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
