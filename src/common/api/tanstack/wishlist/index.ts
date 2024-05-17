import { useUserStore } from "@/common/store";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";

export const useAddToWishlistMutation = (artId: string | number) => {
  const user = useUserStore((state) => state.user);
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(
        `/favorite/user/${user.id}/art/${artId}`
      );
      return response.data;
    },
  });
};

export const useRemoveFromWishlistMutation = (artId: string | number) => {
  const user = useUserStore((state) => state.user);
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.delete(
        `/favorite/user/${user.id}/art/${artId}`
      );
      return response.data;
    },
  });
};
