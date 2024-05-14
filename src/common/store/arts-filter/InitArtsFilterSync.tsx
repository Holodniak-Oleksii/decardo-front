import { FC, useRef } from "react";
import { useArtsFilterStore } from ".";
import { IInitialSyncArtsFilterStoreProps } from "./types";

const InitArtsFilterSync: FC<IInitialSyncArtsFilterStoreProps> = ({
  filter,
}) => {
  const initRef = useRef<boolean>(false);
  if (!initRef.current) {
    useArtsFilterStore.setState((state) => ({
      ...state,
      isInit: true,
      filter: {
        ...state.filter,
        ...filter,
      },
    }));
    initRef.current = true;
  }
  return null;
};

export default InitArtsFilterSync;
