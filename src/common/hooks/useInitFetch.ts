import { useUserStore } from "@/common/store";
import { useEffect } from "react";

export const useInitFetch = () => {
  const setAuth = useUserStore((state) => state.setAuth);
  useEffect(() => {
    setAuth(true);
  }, []);
};
