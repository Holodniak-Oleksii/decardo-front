import { IArtMockModel } from "@/common/types";

export const artData: IArtMockModel[] = [
  {
    id: 1,
    title: "Sunset on the Beach",
    description:
      "A serene painting capturing the beauty of a sunset over the ocean.",
    preview: "/images/sunset.jpg",
    model: "https://example.com/models/sunset.obj",
    owner: "user123",
    ownerName: "John Doe",
    tags: ["landscape", "sunset", "ocean", "art"],
  },
  {
    id: 2,
    title: "Abstract Composition",
    description:
      "A vibrant and dynamic abstract artwork showcasing a play of colors and shapes.",
    preview: "/images/abstract.jpg",
    model: "https://example.com/models/abstract.obj",
    owner: "user456",
    ownerName: "Jane Smith",
    tags: ["abstract", "colorful", "modern", "art"],
  },
  {
    id: 3,
    title: "Floral Symphony",
    description:
      "A delicate painting depicting a symphony of flowers in bloom.",
    preview: "/images/floral.jpg",
    model: "https://example.com/models/floral.obj",
    owner: "user789",
    ownerName: "Alice Johnson",
    tags: ["floral", "nature", "flowers", "art"],
  },
  {
    id: 4,
    title: "Cityscape",
    description:
      "A detailed cityscape capturing the essence of a bustling metropolis.",
    preview: "/images/cityscape.jpg",
    model: "https://example.com/models/cityscape.obj",
    owner: "user456",
    ownerName: "Jane Smith",
    tags: ["cityscape", "urban", "architecture", "art"],
  },
  {
    id: 5,
    title: "Wildlife Portrait",
    description:
      "A realistic portrait of a majestic wild animal in its natural habitat.",
    preview: "/images/wildlife.jpg",
    model: "https://example.com/models/wildlife.obj",
    owner: "user789",
    ownerName: "Alice Johnson",
    tags: ["wildlife", "animals", "nature", "art"],
  },
  {
    id: 6,
    title: "Still Life",
    description: "A classic still life composition featuring everyday objects.",
    preview: "/images/still-life.jpg",
    model: "https://example.com/models/still-life.obj",
    owner: "user123",
    ownerName: "John Doe",
    tags: ["still life", "objects", "realism", "art"],
  },
];
