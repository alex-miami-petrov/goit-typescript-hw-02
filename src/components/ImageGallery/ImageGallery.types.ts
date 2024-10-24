export interface Image {
  id: string | number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

export interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}
