import { Image } from "../Api/api.types";

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
