import { TModelFormat } from "@/common/types";
import { IModelLoaderProps, ISceneSettings } from "../types";

export interface ISceneProps extends IModelLoaderProps, ISceneSettings {
  format: TModelFormat;
  isCapture?: boolean;
  isLocked?: boolean;
  unLock?: () => void;
}

export interface IGetImageProps
  extends Pick<IModelLoaderProps, "onCaptureModel"> {
  isCapture?: boolean;
}

export interface IRefreshProps extends Pick<IModelLoaderProps, "url"> {}
