import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  if (images.length === 0) return null;

  return (
    <div className={s.gallery}>
      {images.map((image) => (
        <div
          className={s.galleryItem}
          key={image.id}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} onClick={onImageClick} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

// import React from "react";
// import ImageCard from "../ImageCard/ImageCard";
// import s from "./ImageGallery.module.css";
// import { ImageGalleryProps } from "./ImageGallery.types";

// const ImageGallery: React.FC<ImageGalleryProps> = ({
//   images,
//   onImageClick,
// }) => {
//   if (images.length === 0) {
//     return <p>No images found.</p>;
//   }

//   return (
//     <div className={s.gallery}>
//       {images.map((image) => (
//         <div
//           className={s.galleryItem}
//           key={image.id}
//           onClick={() => onImageClick(image)}
//         >
//           <ImageCard image={image} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageGallery;
