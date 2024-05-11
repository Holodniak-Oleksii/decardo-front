import { FC, useRef } from "react";
import { useArtsFilterStore } from ".";
import { IInitialSyncArtsFilterStoreProps } from "./types";

const InitArtsFilterSync: FC<IInitialSyncArtsFilterStoreProps> = ({
  filter,
}) => {
  const initRef = useRef<boolean>(false);
  if (!initRef.current) {
    let tags: string[] = [];
    if (typeof filter?.tags === "string") {
      tags = filter?.tags.split(",");
    } else if (Array.isArray(filter?.tags)) {
      tags = filter?.tags;
    }

    useArtsFilterStore.setState((state) => ({
      ...state,
      isInit: true,
      filter: {
        ...state.filter,
        query: filter?.query || "",
        page: Number(filter?.page || 1),
        tags: tags,
      },
    }));
    initRef.current = true;
  }
  return null;
};

export default InitArtsFilterSync;
