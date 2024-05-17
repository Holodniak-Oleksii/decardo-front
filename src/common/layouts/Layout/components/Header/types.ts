import { IOpenable } from "@/common/types";

export interface IHeaderWrapperProps {
  visible: boolean;
}

export interface IAccountProps extends Partial<IOpenable> {
  onClose?: () => void;
}

export interface IHeaderProps {
  isAuth: boolean;
}
