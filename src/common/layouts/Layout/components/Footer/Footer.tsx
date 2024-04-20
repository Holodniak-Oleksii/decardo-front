import { LINK_TEMPLATES } from "@/common/constants";
import { useRouter } from "next/router";
import { contactText, footerNavigation, social } from "./data";
import {
  CompanyLabel,
  Container,
  Content,
  Line,
  List,
  Logo,
  Name,
  NavItem,
  NavTitle,
  SocialList,
  Terms,
  Text,
  Watchword,
  Welcome,
  Wrapper,
} from "./styles";

const Footer = () => {
  const { push } = useRouter();

  const renderNavigation = (array: string[]) =>
    array.map((item, id) => <NavItem key={id}>{item}</NavItem>);

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

          <List>
            <NavTitle>About us</NavTitle>
            {renderNavigation(footerNavigation.about)}
          </List>

          <List>
            <NavTitle>Services</NavTitle>
            {renderNavigation(footerNavigation.services)}
          </List>

          <List>
            <NavTitle>Product</NavTitle>
            {renderNavigation(footerNavigation.products)}
          </List>

          <List>
            <NavTitle>Support</NavTitle>
            {renderNavigation(footerNavigation.support)}
          </List>
        </Content>
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
