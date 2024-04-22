import { StaticImageData } from "next/image";

export interface ICardProps {
  id: number;
  coverImage: string | StaticImageData;
  titleImage: string | StaticImageData;
  characterImage: string | StaticImageData;
  description: string;
}
