import { IUser } from "@/common/types";
import { PropsWithChildren } from "react";

export interface IBannerInfoProps
  extends Pick<IUser, "bannerImage" | "email" | "username">,
    PropsWithChildren {
  isMyProfile: boolean;
}
