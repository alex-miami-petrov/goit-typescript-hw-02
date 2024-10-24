import React from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="load-more-btn">
      Load More
    </button>
  );
};

export default LoadMoreBtn;
