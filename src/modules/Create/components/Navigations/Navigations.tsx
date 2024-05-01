import { MODEL_FORMATS } from "@/common/constants";
import {
  CameraIcon,
  ChevronLeftIcon,
  FolderOpenIcon,
  HandFingerIcon,
  HandFingerOffIcon,
} from "@/common/icons";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { Button, Container, Mask, Relative, Upload } from "./styles";
import { INavigationsProps } from "./types";

const Navigations: FC<INavigationsProps> = ({
  handlerTakePhoto,
  disabled,
  handlerChangeFile,
}) => {
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
            type="button"
            onClick={() => {
              back();
            }}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            type="button"
            onClick={() => setEnabled((prev) => !prev)}
            disabled={disabled}
          >
            {!enabled ? <HandFingerIcon /> : <HandFingerOffIcon />}
          </Button>
          <Button
            type="button"
            disabled={enabled || disabled}
            onClick={() => {
              onCameraCapture();
              handlerTakePhoto();
            }}
          >
            <CameraIcon />
          </Button>
          <Upload htmlFor="file">
            <FolderOpenIcon />
            <input
              id="file"
              type="file"
              accept={"." + MODEL_FORMATS.join(", .")}
              hidden
              onChange={handlerChangeFile}
            />
          </Upload>
        </Container>
      </Relative>
    </Mask>
  );
};

export default Navigations;
