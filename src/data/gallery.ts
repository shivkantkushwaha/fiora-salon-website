import { business } from "./site";

export const galleryImages = Array.from({ length: 8 }, (_, index) => ({
  src: `/gallery${index + 1}.png`,
  alt: `${business.name} glimpse ${index + 1}`,
}));
