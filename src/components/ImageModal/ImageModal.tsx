import React from "react";
import Modal from "react-modal";
import "./ImageModal.css";
import { ImageModalProps } from "./ImageModal.types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={true}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className="modal-image"
      />
    </Modal>
  );
};

export default ImageModal;
