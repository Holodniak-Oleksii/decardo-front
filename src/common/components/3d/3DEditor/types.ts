import { ISceneProps } from "../Scene/types";
import { IModelLoaderProps, ISceneSettings } from "../types";

export interface ISettingsPanelProps {
  sceneSettings: ISceneSettings;
  onChangeSceneSettings: (sceneSettings: ISceneSettings) => void;
}

export interface IThreeDEditorProps
  extends Pick<ISceneProps, "isCapture">,
    Pick<ISettingsPanelProps, "onChangeSceneSettings">,
    IModelLoaderProps {}
