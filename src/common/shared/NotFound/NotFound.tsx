import { Container, Title } from "./styles";

const NotFound = ({
  title = "Nothing was found for your request, try choosing other data",
}) => (
  <Container>
    <Title>{title}</Title>
  </Container>
);

export default NotFound;
