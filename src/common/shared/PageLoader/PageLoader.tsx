import animationData from "@/assets/animation/loader.json";
import { useUserStore } from "@/common/store";
import Lottie from "lottie-react";
import { useRef } from "react";
import { Transition } from "react-transition-group";
import { Overlay } from "./styles";

const PageLoader = () => {
  const isInit = useUserStore((state) => state.isInit);
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Transition
      nodeRef={overlayRef}
      in={!isInit}
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
