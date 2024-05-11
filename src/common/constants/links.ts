import { IArtsFilter } from "../store/arts-filter/types";

export const LINK_TEMPLATES = {
  HOME: () => "/",
  ABOUT_US: () => "/about-us",
  SPACE_DETAILS: (id: string | number) => `/spaces/${id}`,
  SIGN_IN: () => "/sign-in",
  SIGN_UP: () => "/sign-up",
  CREATE_SPACE: () => "/create-space",
  SPACES: ({ query = "", tags = [], page = 1 }: Omit<IArtsFilter, "limit">) => {
    return `/spaces?page=${page}&query=${query}&tags=${tags.join(",")}`;
  },
  EDIT: () => "/edit",
  PROFILE: (username: string) => `/profile/${username}`,
};
