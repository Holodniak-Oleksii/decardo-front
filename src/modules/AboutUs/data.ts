import imageHeroLosha from "@/assets/images/heroes/losha.jpg";
import imageHeroVetal from "@/assets/images/heroes/vetal.jpg";
import { ICardProps } from "./types";

import imagePersonLosha from "@/assets/images/heroes/Losha.png";
import imagePersonVetal from "@/assets/images/heroes/Vetal.png";

import imageTitleBack from "@/assets/images/titles/title-back.png";
import imageTitleFront from "@/assets/images/titles/title-front.png";

export const members: ICardProps[] = [
  {
    id: 1,
    coverImage: imageHeroVetal,
    characterImage: imagePersonVetal,
    titleImage: imageTitleBack,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim. Libero enim sed faucibus turpis. Posuere morbi leo urna molestie at. Mauris nunc congue nisi vitae suscipit. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl pretium fusce id velit ut tortor. Iaculis urna id volutpat lacus laoreet non. Tempus urna et pharetra pharetra massa massa ultricies.`,
  },
  {
    id: 2,
    coverImage: imageHeroLosha,
    characterImage: imagePersonLosha,
    titleImage: imageTitleFront,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim. Libero enim sed faucibus turpis. Posuere morbi leo urna molestie at. Mauris nunc congue nisi vitae suscipit. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Nisl pretium fusce id velit ut tortor. Iaculis urna id volutpat lacus laoreet non. Tempus urna et pharetra pharetra massa massa ultricies.`,
  },
];
