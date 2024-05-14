import animationData from "@/assets/animation/loader.json";
import Lottie from "lottie-react";
import { Container } from "./styles";

const BannerLoader = ({ is404 = false }) => {
  return (
    <Container>
      {is404 ? (
        <>Not found</>
      ) : (
        <Lottie animationData={animationData} width={100} />
      )}
    </Container>
  );
};

export default BannerLoader;
