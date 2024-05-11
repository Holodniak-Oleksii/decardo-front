import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { IInitialUserStoreProps, IUserStoreProps } from "./types";

const initialState: IInitialUserStoreProps = {
  isAuth: false,
  isInit: false,
};

export const useUserStore = create<IUserStoreProps>()(
  devtools(
    immer((set) => ({
      ...initialState,
      setAuth(value) {
        set((state) => {
          state.isAuth = value;
          state.isInit = true;
        });
      },
    }))
  )
);
