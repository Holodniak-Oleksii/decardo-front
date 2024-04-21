import animationData from "@/assets/animation/background.json";

import Lottie from "lottie-react";
import { FC, PropsWithChildren } from "react";
import {
  Background,
  CompanyLabel,
  Container,
  Content,
  Head,
  Logo,
  Name,
  Wrapper,
} from "./styles";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Wrapper>
      <Background>
        <Lottie animationData={animationData} />
      </Background>
      <Container>
        <Content>
          <Head>
            <CompanyLabel>
              <Logo>
                D <span>3</span>
              </Logo>
              <Name>ECARDO</Name>
            </CompanyLabel>
          </Head>
          {children}
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AuthLayout;
