import { QueryKey } from "@/common/enums";
import { ILoginFormValues } from "@/modules/Auth/Login/types";
import { IRegistrationFormValues } from "@/modules/Auth/Registration/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "..";
import { axiosInstance } from "../../axios";

export const useRegistrationMutation = () => {
  return useMutation({
    mutationFn: async (body: IRegistrationFormValues) => {
      const response = await axiosInstance.post(`/user/register`, body);
      return response.data;
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: async (body: ILoginFormValues) => {
      const response = await axiosInstance.post(`/user/login`, body);
      return response.data;
    },
  });
};

export const prefetchProfile = (cookie = "", username = "") => {
  return queryClient.prefetchQuery({
    queryKey: [QueryKey.PROFILE, username],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/user${username !== QueryKey.USER ? "/" + username : ""}`,
        {
          headers: {
            cookie,
          },
        }
      );
      return response.data;
    },
  });
};

export const useProfileQuery = () => {
  return useQuery({
    staleTime: 0,
    refetchOnMount: false,
    queryKey: [QueryKey.PROFILE, QueryKey.USER],

    queryFn: async () => {
      const response = await axiosInstance.get(`/user`);
      return response.data;
    },
  });
};

export const useUpdateMutation = () => {
  return useMutation({
    mutationFn: async (body: FormData) => {
      const response = await axiosInstance.put(`/user`, body);
      return response.data;
    },
  });
};

export const useLogOutMutation = () => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(`/user/logout`);
      return response.data;
    },
  });
};
