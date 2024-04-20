import imageArt from "@/assets/images/banner.png";
import { Paragraph } from "./components";
import { textBlocks } from "./data";
import {
  ArtImage,
  Container,
  Content,
  ImageContainer,
  Wrapper,
} from "./styles";
const TargetText = () => {
  const renderTexts = () => {
    return textBlocks.map((text) => <Paragraph {...text} key={text.id} />);
  };
  return (
    <Wrapper>
      <Container>
        <ImageContainer>
          <ArtImage src={imageArt} alt="art" />
        </ImageContainer>
        <Content>{renderTexts()}</Content>
      </Container>
    </Wrapper>
  );
};

export default TargetText;
