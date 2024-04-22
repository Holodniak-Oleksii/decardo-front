import Card from "./components/Card/Card";
import { members } from "./data";
import { CardContainer, Container, Content, Title, Wrapper } from "./styles";

const AboutUs = () => {
  const renderMembers = () => {
    return members.map((member) => <Card key={member.id} {...member} />);
  };

  return (
    <Wrapper>
      <Container>
        <Content>
          <Title>Our Team</Title>
          <CardContainer>{renderMembers()}</CardContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default AboutUs;
