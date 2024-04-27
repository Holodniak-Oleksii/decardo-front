import { TModelFormat } from "@/common/types";
import { IModelLoaderProps } from "../types";

export interface ISceneProps extends IModelLoaderProps {
  format: TModelFormat;
  ambientLight: {
    intensity: number;
  };
  directionalLight: {
    intensity: number;
  };
  castShadow: boolean;
  backgroundColor: string;
  hemisphereLight: {
    intensity: number;
    groundColor: string;
  };
  isCapture: boolean;
}
