import { IActiveble } from "@/common/types";
import { StaticImageData } from "next/image";

export interface IWaveProps extends IActiveble {
  preview: StaticImageData;
}
