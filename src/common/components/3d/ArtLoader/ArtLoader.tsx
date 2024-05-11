import animationData from "@/assets/animation/loader.json";
import Lottie from "lottie-react";
import { Html } from "@react-three/drei";
import { Container } from "./styles";

const Loading = () => (
  <Html center>
    <Container>
      <Lottie animationData={animationData} width={100} />
    </Container>
  </Html>
);

export default Loading;
