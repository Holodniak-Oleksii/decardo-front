export interface IInitialUserStoreProps {
  isAuth: boolean;
  isInit: boolean;
}

export interface IUserStoreProps extends IInitialUserStoreProps {
  setAuth: (value: boolean) => void;
}
