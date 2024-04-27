import {
  CameraIcon,
  ChevronLeftIcon,
  HandFingerIcon,
  HandFingerOffIcon,
} from "@/common/icons";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { Button, Container, Mask, Relative } from "./styles";
import { INavigationsProps } from "./types";

const Navigations: FC<INavigationsProps> = ({ handlerTakePhoto, disabled }) => {
  const [enabled, setEnabled] = useState(false);
  const maskRef = useRef<HTMLDivElement>(null);
  const { back } = useRouter();

  const onCameraCapture = () => {
    if (maskRef.current) {
      maskRef.current.style.backgroundColor = "#ffffff99";
      setTimeout(() => {
        if (maskRef.current) {
          maskRef.current.style.backgroundColor = "#00000000";
        }
      }, 200);
    }
  };

  useEffect(() => {
    if (maskRef.current) {
      if (enabled) {
        maskRef.current.style.pointerEvents = "all";
        maskRef.current.style.backgroundColor = "#00000095";
      } else {
        maskRef.current.style.pointerEvents = "none";
        maskRef.current.style.backgroundColor = "#00000000";
      }
    }
  }, [enabled]);

  return (
    <Mask ref={maskRef}>
      <Relative>
        <Container>
          <Button
            onClick={() => {
              back();
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            onClick={() => setEnabled((prev) => !prev)}
            disabled={disabled}
          >
            {!enabled ? <HandFingerIcon /> : <HandFingerOffIcon />}
          </Button>
          <Button
            disabled={enabled || disabled}
            onClick={() => {
              onCameraCapture();
              handlerTakePhoto();
            }}
          >
            <CameraIcon />
          </Button>
        </Container>
      </Relative>
    </Mask>
  );
};

export default Navigations;
