import { LevaPanel, folder, useControls, useCreateStore } from "leva";
import { FC } from "react";
import Scene from "../Scene/Scene";
import { IThreeDEditorProps } from "./types";

const ThreeDEditor: FC<IThreeDEditorProps> = ({
  url,
  format,
  isCapture,
  onCaptureModel,
}) => {
  const storePanel = useCreateStore();

  const {
    backgroundColor,
    castShadow,
    ambientIntensity,
    directionalIntensity,
    hemisphereIntensity,
    groundColor,
  } = useControls(
    {
      "Ambient Light": folder({
        ambientIntensity: { value: 1.2, min: 0, step: 0.1, max: 100 },
      }),
      "Directional Light": folder({
        directionalIntensity: { value: 0.5, min: 0, step: 0.1, max: 100 },
      }),
      "Hemisphere Light": folder({
        hemisphereIntensity: { value: 1, min: 0, step: 0.1, max: 100 },
        groundColor: { value: "#ffffff" },
      }),
      backgroundColor: { value: "#e6e6e6" },
      castShadow: { value: false },
    },
    { store: storePanel }
  );

  return (
    <>
      <LevaPanel
        store={storePanel}
        titleBar={{
          drag: false,
        }}
      />
      <Scene
        ambientLight={{ intensity: ambientIntensity }}
        directionalLight={{
          intensity: directionalIntensity,
        }}
        castShadow={castShadow}
        format={format}
        backgroundColor={backgroundColor}
        url={url}
        hemisphereLight={{
          intensity: hemisphereIntensity,
          groundColor: groundColor,
        }}
        isCapture={isCapture}
        onCaptureModel={onCaptureModel}
      />
    </>
  );
};

export default ThreeDEditor;
