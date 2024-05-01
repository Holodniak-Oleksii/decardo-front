import { StaticImageData } from "next/image";
import { ISceneSettings } from "../components/3d/types";

export interface IUser {}

export interface IArtResponseModel {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  preview: string;
  model: string;
  owner: string;
  settings: ISceneSettings;
}

export interface IArtRequestModel
  extends Omit<Omit<IArtResponseModel, "id">, "model" | "preview"> {
  model: File;
  preview: File;
}

export interface IArtMockModel extends Omit<IArtResponseModel, "preview"> {
  preview: string | StaticImageData;
}
