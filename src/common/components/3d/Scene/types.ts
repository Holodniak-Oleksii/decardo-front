import { TModelFormat } from "@/common/types";
import { IModelLoaderProps, ISceneSettings } from "../types";

export interface ISceneProps extends IModelLoaderProps, ISceneSettings {
  format: TModelFormat;

  isCapture: boolean;
}
