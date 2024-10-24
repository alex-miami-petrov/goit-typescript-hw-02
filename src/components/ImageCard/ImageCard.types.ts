export interface Image {
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

export interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
