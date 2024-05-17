import { FC, memo } from "react";
import { useUserStore } from ".";
import { IInitialUserStoreProps } from "./types";

const InitUserSync: FC<Omit<IInitialUserStoreProps, "isInit">> = ({
  isAuth,
  user,
}) => {
  const isInit = useUserStore((state) => state.isInit);
  console.log("SUNSCT user :", user);

  if (!isInit) {
    useUserStore.setState((state) => ({
      ...state,
      user,
      isAuth,
      isInit: true,
    }));
  }

  return null;
};

export default memo(InitUserSync);
