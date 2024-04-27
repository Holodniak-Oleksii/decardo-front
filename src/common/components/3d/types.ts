import { TModelFormat } from "@/common/types";

export interface ILoadModelProps {
  url: string;
}
export type TCaptureModel = (screenShot: string) => {};

export interface IModelLoaderProps extends ILoadModelProps {
  format: TModelFormat;
  onCaptureModel: (screenShot: string) => void;
}
