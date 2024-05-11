import { LINK_TEMPLATES } from "@/common/constants";
import { TabletOff, TabletOn } from "@/utils";
import { useRouter } from "next/router";
import { Navigations } from "./components";
import { contactText, social } from "./data";
import {
  CompanyLabel,
  Container,
  Content,
  Line,
  Logo,
  Name,
  NavContainer,
  SocialList,
  Terms,
  Text,
  Watchword,
  Welcome,
  Wrapper,
} from "./styles";

const Footer = () => {
  const { push } = useRouter();

  const renderSocial = () => social.map((Social, id) => <Social key={id} />);

  return (
    <Wrapper>
      <Container>
        <Content>
          <Welcome>
            <CompanyLabel>
              <Logo onClick={() => push(LINK_TEMPLATES.HOME())}>
                D <span>3</span>
              </Logo>
              <Name>ECARDO</Name>
            </CompanyLabel>
            <Watchword>{contactText}</Watchword>
            <SocialList>{renderSocial()}</SocialList>
          </Welcome>
          <TabletOff>
            <Navigations />
          </TabletOff>
        </Content>
        <TabletOn>
          <NavContainer>
            <Navigations />
          </NavContainer>
        </TabletOn>
        <Line />
        <Terms>
          <Text>© 2024 Decardo. All rights reserved.</Text>
          <Text>Terms & Conditions | Privacy & Policy</Text>
        </Terms>
      </Container>
    </Wrapper>
  );
};

export default Footer;
