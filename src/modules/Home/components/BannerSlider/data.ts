import imageSlide1 from "@/assets/images/slider/01.jpg";
import imageSlide2 from "@/assets/images/slider/02.webp";
import imageSlide3 from "@/assets/images/slider/03.jpg";
import imageSlide4 from "@/assets/images/slider/04.jpg";
import imageSlide5 from "@/assets/images/slider/05.webp";
import imageSlide6 from "@/assets/images/slider/06.jpg";

import { IBannerSliderItem } from "./types";
export const pathSvg =
  "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z";

export const sliderContent: IBannerSliderItem[] = [
  {
    title: "Architectural Discoveries",
    image: imageSlide4,
    description:
      "Discover architectural masterpieces that enrich our environment through the lens of art, opening up new perspectives on space and form.",
  },
  {
    title: "Light and Shadows",
    image: imageSlide2,
    description:
      "Dive into the play of light and shadows through unique images that reflect the diversity of life and nature in our world",
  },
  {
    title: "Art of Dimensions",
    image: imageSlide3,
    description:
      "Explore the world of new dimensions in art with our collection of unique interpretations that captivate the imagination and inspire dreams.",
  },
  {
    title: "Emotional Palette",
    image: imageSlide5,
    description:
      "Feel the magic of art through a variety of feelings and emotions brought to life on the canvases of our talented artists",
  },

  {
    title: "Fantasy Landscape",
    image: imageSlide1,
    description:
      "Open the doors to a world of fantasy landscapes where each painting is a step into an incredible journey of imagination and creativity.",
  },

  {
    title: "Nature's Symbolism",
    image: imageSlide6,
    description:
      "Experience the harmony of nature through our art collection, which reproduces the symbolism and beauty of the surrounding world in every detail.      ",
  },
];
