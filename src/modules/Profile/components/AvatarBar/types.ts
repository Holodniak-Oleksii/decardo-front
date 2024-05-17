import { IUser } from "@/common/types";

export interface IAvatarBarProps
  extends Pick<IUser, "avatar" | "description" | "contact"> {}
