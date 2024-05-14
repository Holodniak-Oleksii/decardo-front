import { IRegistrationFormValues } from "@/modules/Auth/Registration/types";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../axios";

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: async (body: IRegistrationFormValues) => {
      const response = await axiosInstance.post(`/user/register`, body);
      return response.data;
    },
  });
};
