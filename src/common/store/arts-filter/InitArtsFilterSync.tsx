import { FC } from "react";
import { useArtsFilterStore } from ".";
import { IInitialSyncArtsFilterStoreProps } from "./types";

const InitArtsFilterSync: FC<IInitialSyncArtsFilterStoreProps> = ({
  filter,
}) => {
  const isInit = useArtsFilterStore((state) => state.isInit);
  if (!isInit) {
    useArtsFilterStore.setState((state) => ({
      ...state,
      isInit: true,
      filter: {
        ...state.filter,
        ...filter,
      },
    }));
  }
  return null;
};

export default InitArtsFilterSync;
