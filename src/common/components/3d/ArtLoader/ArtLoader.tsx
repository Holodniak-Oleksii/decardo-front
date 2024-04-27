import animationData from "@/assets/animation/loader.json";
import { Html, useProgress } from "@react-three/drei";
import Lottie from "lottie-react";
import { FC, useEffect } from "react";
import { Container } from "./styles";
import { IArtLoadingProps } from "./types";

const Loading: FC<IArtLoadingProps> = ({ onChangeProgress }) => {
  const { progress, active } = useProgress();

  useEffect(() => {
    if (typeof onChangeProgress === "function") {
      onChangeProgress(!active);
    }
  }, [active]);

  return (
    <Html center>
      <Container>
        <Lottie animationData={animationData} />
        <span>{progress.toFixed(0)}</span>
      </Container>
    </Html>
  );
};

export default Loading;
