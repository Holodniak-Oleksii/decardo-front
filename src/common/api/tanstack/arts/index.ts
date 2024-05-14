import { QueryKey } from "@/common/enums";
import { IArtsFilter } from "@/common/store/arts-filter/types";
import { IArtRequestModel, IArtResponseModel, IResponse } from "@/common/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "..";
import { axiosInstance } from "../../axios";

export const useCreateArtMutation = () =>
  useMutation({
    mutationFn: async (art: IArtRequestModel) => {
      const formData = new FormData();
      formData.append("name", art.title);
      formData.append("description", art.description);
      formData.append("tags", JSON.stringify(art.tags));
      formData.append("preview", art.preview);
      formData.append("model", art.model);
      formData.append("owner", art.owner);
      formData.append("settings", JSON.stringify(art.settings));

      try {
        const res = await axiosInstance.post("api/art/create", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        return res.data;
      } catch (error) {
        console.log("error :", error);
      }
    },
  });

const artsFetch = async (filters: IArtsFilter) => {
  const params = new URLSearchParams();

  if (filters.page) params.append("page", filters.page.toString());
  if (filters.query) params.append("query", filters.query);
  if (filters.limit) params.append("limit", filters.limit.toString());
  if (filters.tags) params.append("tags", filters.tags.join(","));

  const url = `/arts${params.toString() ? `?${params.toString()}` : ""}`;

  const response = await axiosInstance.get(url);
  return response.data;
};

export const useGetArtsQuery = (filters: IArtsFilter) => {
  return useQuery<IResponse<IArtResponseModel[]>>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [
      QueryKey.ARTS,
      filters.page,
      filters.query,
      filters.tags.join(","),
    ],
    queryFn: async () => artsFetch(filters),
  });
};

export const prefetchGetArts = (filters: IArtsFilter) => {
  return queryClient.prefetchQuery({
    queryKey: [
      QueryKey.ARTS,
      filters.page,
      filters.query,
      filters.tags.join(","),
    ],
    queryFn: async () => artsFetch(filters),
  });
};

export const prefetchGetHomeArts = () => {
  return queryClient.prefetchQuery({
    queryKey: [QueryKey.ART_HOME],
    queryFn: async () => {
      const response = await axiosInstance.get(`/arts?page=1&limit=8`);
      return response.data.result;
    },
  });
};

export const useGetArtQuery = ({ id = "" }) => {
  return useQuery<IResponse<IArtResponseModel[]>>({
    staleTime: 60000,
    refetchOnMount: false,
    queryKey: [QueryKey.ART, id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/arts/${id}`);
      return response.data;
    },
  });
};

export const prefetchArt = ({ id = "", cookie = "" }) => {
  return queryClient.prefetchQuery({
    queryKey: [QueryKey.ART, id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/arts/${id}`, {
        headers: {
          cookie,
        },
      });
      return response.data;
    },
  });
};

export const prefetchArtsRecommended = ({ id = "", tags = "" }) => {
  return queryClient.prefetchQuery({
    queryKey: [QueryKey.RECOMMENDED_ARTS, id, tags],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/arts?page=1&limit=8&tags=${tags}`
      );
      return response.data;
    },
  });
};
