import { ISceneProps } from "../Scene/types";
import { IModelLoaderProps } from "../types";

export interface IThreeDEditorProps
  extends Pick<ISceneProps, "isCapture">,
    IModelLoaderProps {}
