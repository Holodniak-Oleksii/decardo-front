import Image from "next/image";
import {
  Container,
  Content,
  Description,
  ImageContainer,
  ImageIndent,
  Text,
  Title,
  Wrapper,
} from "./styles";

import imagePot from "@/assets/images/pot.png";
import imageStars from "@/assets/images/stars.png";
import { PlayIcon } from "@/common/icons";
import { Button } from "@/ui-liberty/buttons";

const Welcome = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Text>
            <Title>
              Discover the 3D Art Universe in your mind
              <Image src={imageStars} alt="start" />
            </Title>
            <Description>
              Immerse yourself in the captivating world of our 3D art gallery,
              where each creation is a blend of form and color magic. Step into
              a realm of creativity where images come alive before your eyes,
              leaving unforgettable impressions. Dive into new depths of
              artistry with our collection of stunning 3D works.
            </Description>
            <Button size="lg" endIcon={<PlayIcon />}>
              Get Started
            </Button>
          </Text>
          <ImageContainer>
            <ImageIndent>
              <Image src={imagePot} alt="consmo" />
            </ImageIndent>
          </ImageContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Welcome;
