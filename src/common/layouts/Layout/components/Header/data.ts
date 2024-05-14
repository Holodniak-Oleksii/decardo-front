import { LINK_TEMPLATES } from "@/common/constants";

export const headerNavigation = [
  {
    id: 0,
    title: "Home",
    trigger: LINK_TEMPLATES.HOME,
  },
  {
    id: 1,
    title: "Spaces",
    trigger: () => LINK_TEMPLATES.SPACES({}),
  },
  // {
  //   id: 2,
  //   title: "About us",
  //   trigger: LINK_TEMPLATES.ABOUT_US,
  // },
];
