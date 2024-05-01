import { IArtRequestModel } from "@/common/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateArtMutation = () =>
  useMutation({
    mutationFn: async (art: IArtRequestModel) => {
      console.log("art :", art);

      const formData = new FormData();
      formData.append("name", art.title);
      formData.append("description", art.description);
      formData.append("tags", JSON.stringify(art.tags));
      formData.append("preview", art.preview);
      formData.append("model", art.model);
      formData.append("owner", art.owner);
      formData.append("settings", JSON.stringify(art.settings));

      try {
        console.log("formData :", formData);
        // const res = await axiosInstance.post("api/art/create", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // });
        // return res.data;
      } catch (error) {
        console.log("error :", error);
      }
    },
  });
