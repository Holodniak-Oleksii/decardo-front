import { IOpenable } from "@/common/types";
import { Dispatch, SetStateAction } from "react";

export interface IBurgerMenuProps extends IOpenable {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
