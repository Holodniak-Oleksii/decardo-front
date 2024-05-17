import { IUser } from "@/common/types";

export interface IInitialUserStoreProps {
  isAuth: boolean;
  isInit: boolean;
  user: IUser;
}

export interface IUserStoreProps extends IInitialUserStoreProps {
  setAuth: (value: boolean) => void;
  setUser: (value: IUser) => void;
}
