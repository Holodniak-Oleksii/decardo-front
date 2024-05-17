import { IUser } from "@/common/types";

export interface IEditFormFields
  extends Pick<IUser, "contact" | "description" | "username"> {
  avatar: File;
  bannerImage: File;
}

export interface IEditPageProps
  extends Omit<IEditFormFields, "avatar" | "bannerImage"> {
  avatar: string;
  bannerImage: string;
}
