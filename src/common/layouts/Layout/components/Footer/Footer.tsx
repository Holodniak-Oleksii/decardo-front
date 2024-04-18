import { social } from "./data";
import { Container, Wrapper } from "./styles";

const Footer = () => {
  const renderSocial = () => {
    return social.map((Item, id) => (
      <li key={id}>
        <Item />
      </li>
    ));
  };

  return (
    <Wrapper>
      <Container></Container>
    </Wrapper>
  );
};

export default Footer;
