import { FC, useEffect, useState } from "react";
import Scene from "../Scene/Scene";
import { ISceneSettings } from "../types";
import { SettingsPanel } from "./components";
import { IThreeDEditorProps } from "./types";

const ThreeDEditor: FC<IThreeDEditorProps> = ({
  url,
  format,
  isCapture,
  onCaptureModel,
  onChangeSceneSettings,
}) => {
  const [sceneSettings, setSceneSettings] = useState<ISceneSettings>({
    ambientLight: {
      intensity: 1.2,
    },
    backgroundColor: "#fff",
    directionalLight: {
      intensity: 0.5,
    },
    hemisphereLight: {
      groundColor: "#000",
      intensity: 1,
    },
  });

  useEffect(() => {
    onChangeSceneSettings(sceneSettings);
  }, [JSON.stringify(sceneSettings)]);

  return (
    <>
      <Scene
        ambientLight={sceneSettings.ambientLight}
        directionalLight={sceneSettings.directionalLight}
        format={format}
        backgroundColor={sceneSettings.backgroundColor}
        url={url}
        hemisphereLight={sceneSettings.hemisphereLight}
        isCapture={isCapture}
        onCaptureModel={onCaptureModel}
      />
      <SettingsPanel
        onChangeSceneSettings={(settings) => setSceneSettings(settings)}
        sceneSettings={sceneSettings}
      />
    </>
  );
};

export default ThreeDEditor;
