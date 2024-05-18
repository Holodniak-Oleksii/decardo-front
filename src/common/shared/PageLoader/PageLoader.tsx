import animationData from "@/assets/animation/loader.json";
import Lottie from "lottie-react";
import { Overlay } from "./styles";

const PageLoader = () => {
  return (
    <Overlay>
      <Lottie animationData={animationData} width={100} />
    </Overlay>
  );
};

export default PageLoader;
