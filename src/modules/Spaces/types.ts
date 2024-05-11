import {
  IArtsFilter,
  IArtsFilterResponse,
} from "@/common/store/arts-filter/types";
import { IArtResponseModel } from "@/common/types";

export interface IArtsParams {
  page: number;
  query: string;
  tags: string;
}

export interface IArtsPageProps {
  arts: IArtResponseModel[];
  params: IArtsFilterResponse;
}

export type TRedirection = <K extends keyof IArtsFilter>(
  value: IArtsFilter[K],
  name: K
) => void;
