import { ART_CATEGORIES } from "@/common/constants";
import { IArtResponseModel } from "@/common/types";

export const ART_RESPONSE_LIST: IArtResponseModel[] = [
  {
    id: 1,
    title: "Good Girl",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
    tags: ART_CATEGORIES.slice(0, 4),
    model:
      "https://firebasestorage.googleapis.com/v0/b/nazaret-church-goods.appspot.com/o/Merged_PolySphere_4553.fbx?alt=media&token=49b9885e-1758-40cf-a88c-0faf9ce8bc81",
    owner: "Alex",
    format: "fbx",
    preview:
      "https://firebasestorage.googleapis.com/v0/b/nazaret-church-goods.appspot.com/o/What-is-a-3d-model-1.jpg?alt=media&token=f199453e-0a1c-4bb9-b48b-5a5b292a05ac",
    settings: {
      ambientLight: {
        intensity: 1.2,
      },
      directionalLight: {
        intensity: 1,
      },
      hemisphereLight: {
        groundColor: "#000000",
        intensity: 1,
      },
      backgroundColor: "#6075df",
    },
  },
];
