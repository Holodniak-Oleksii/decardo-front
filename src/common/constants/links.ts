export const LINK_TEMPLATES = {
  HOME: () => "/",
  SPACES: () => "/spaces",
  ABOUT_US: () => "/about-us",
  SPACE_DETAILS: (id: string | number) => `/spaces/${id}`,
  SIGN_IN: () => "/sign-in",
  SIGN_UP: () => "/sign-up",
  CREATE_SPACE: () => "/create-space",
  PROFILE: (username: string) => `/profile/${username}`,
};
