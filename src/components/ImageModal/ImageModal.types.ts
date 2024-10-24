export interface Image {
  id: string | number;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string;
}

export interface ImageModalProps {
  image: Image | null;
  onClose: () => void;
}
