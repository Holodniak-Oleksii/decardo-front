import { ARTS_LIMITS } from "@/common/constants";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IArtsFilterStoreProps, IInitialArtsFilterStoreProps } from "./types";

const initialState: IInitialArtsFilterStoreProps = {
  filter: {
    query: "",
    page: 1,
    limit: ARTS_LIMITS.HD_SCREEN,
    tags: [],
  },
  isInit: false,
};

export const useArtsFilterStore = create<IArtsFilterStoreProps>()(
  devtools(
    immer((set) => ({
      ...initialState,
      onChangeFilterFieldHandler: (value, name) => {
        set((state) => {
          state.filter = { ...state.filter, [name]: value };
        });
      },
    }))
  )
);
