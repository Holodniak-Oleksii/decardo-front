import animationData from "@/assets/animation/lines.json";
import Lottie from "lottie-react";
import { bannerText } from "./data";
import { Background, Content, Description, Title, Wrapper } from "./styles";

const Banner = () => {
  return (
    <Wrapper>
      <Background>
        <Lottie animationData={animationData} />
      </Background>
      <Content>
        <Title>{bannerText.title}</Title>
        <Description>{bannerText.description}</Description>
      </Content>
    </Wrapper>
  );
};

export default Banner;
