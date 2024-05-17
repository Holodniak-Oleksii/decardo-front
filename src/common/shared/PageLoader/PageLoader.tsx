import animationData from "@/assets/animation/loader.json";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { Overlay } from "./styles";

const PageLoader = () => {
  const [isMounded, setIsMounded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounded(true);
  }, []);

  return (
    <Transition
      nodeRef={overlayRef}
      in={!isMounded}
      timeout={1000}
      unmountOnExit
      mountOnEnter
    >
      {(state) => (
        <Overlay ref={overlayRef} transitionState={state}>
          <Lottie animationData={animationData} width={100} />
        </Overlay>
      )}
    </Transition>
  );
};

export default PageLoader;
