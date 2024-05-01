import { TModelFormat } from "@/common/types";

export interface ILoadModelProps {
  url: string;
}
export type TCaptureModel = (screenShot: string) => void;

export interface IModelLoaderProps extends ILoadModelProps {
  format: TModelFormat;
  onCaptureModel: TCaptureModel;
}

export interface ISceneSettings {
  ambientLight: {
    intensity: number;
  };
  directionalLight: {
    intensity: number;
  };
  backgroundColor: string;
  hemisphereLight: {
    intensity: number;
    groundColor: string;
  };
}
