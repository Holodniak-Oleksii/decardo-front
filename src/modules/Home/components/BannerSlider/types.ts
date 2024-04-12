import { StaticImageData } from "next/image";

export interface IRotate {
  position: number;
}

export interface IMoved {
  movedStep: number;
}

export interface ISectorProps {
  index: number;
}

export interface IBannerSliderItem {
  title: string;
  description: string;
  image: StaticImageData;
}
