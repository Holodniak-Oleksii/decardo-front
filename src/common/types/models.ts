import { StaticImageData } from "next/image";
import { ISceneSettings } from "../components/3d/types";
import { TModelFormat } from "./general";

export interface IArtResponseModel {
  id: string | number;
  format: TModelFormat;
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

export interface IUser {
  id: string;
  username: string;
  bannerImage: string;
  email: string;
  avatar: string | null;
  description: string;
  contact: string | null;
  arts: IArtResponseModel[];
  wishlist: IArtResponseModel[];
}
