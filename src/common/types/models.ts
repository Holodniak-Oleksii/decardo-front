import { StaticImageData } from "next/image";

export interface IUser {}

export interface IArt {
  id: string | number;
  name: string;
  description: string;
  preview: string | StaticImageData;
  modelArt: string;
  owner: string;
  ownerName: string;
  tags: string[];
}
