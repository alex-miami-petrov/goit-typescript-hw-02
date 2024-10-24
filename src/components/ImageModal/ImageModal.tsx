// import React from "react";
// import Modal from "react-modal";
// import "./ImageModal.css";
// import { ImageModalProps } from "./ImageModal.types";

// Modal.setAppElement("#root");

// const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
//   if (!image) return null;

//   return (
//     <Modal
//       isOpen={true}
//       onRequestClose={onClose}
//       contentLabel="Image Modal"
//       className="modal"
//       overlayClassName="overlay"
//       ariaHideApp={true}
//       shouldCloseOnOverlayClick={true}
//     >
//       <img
//         src={image.urls.regular}
//         alt={image.alt_description}
//         className="modal-image"
//       />
//     </Modal>
//   );
// };

// export default ImageModal;

import React, { useEffect } from "react";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "./ImageModal.types";

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={s.overlay} onClick={onClose}>
      <div
        className={s.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={s.modalImage}
        />
      </div>
    </div>
  );
};

export default ImageModal;
