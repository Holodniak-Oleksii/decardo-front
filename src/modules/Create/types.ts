import { IModelLoaderProps } from "@/common/components/3d/types";
import { IArtRequestModel, IInvalid } from "@/common/types";

export interface IScreenShotProps extends IInvalid {
  url: string | null;
}

export interface IArtFormFiled
  extends Pick<IArtRequestModel, "description" | "title" | "tags"> {}

export interface IArtFile extends Omit<IModelLoaderProps, "onCaptureModel"> {
  file: File;
}
