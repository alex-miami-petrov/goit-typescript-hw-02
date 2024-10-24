import React, { useState, useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMesage/ErrorMessage";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../components/Api/api";
import "../App.css";
// import Modal from "react-modal";

import { Image } from "./App.types";

// Modal.setAppElement("#root");

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!query) return;

    const loadImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchImages(query, page);
        if (data.results.length === 0) {
          toast("No more images found", { icon: "ℹ️" });
        }
        setImages((prevImages) => [
          ...prevImages,
          ...(data.results as Image[]),
        ]);
      } catch (err) {
        setError("Failed to fetch images. Please try again.");
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    };

    loadImages();

    return () => {
      setLoading(false);
    };
  }, [query, page]);

  useEffect(() => {
    if (loadingMore) {
      setTimeout(() => {
        if (loadMoreRef.current) {
          loadMoreRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [loadingMore]);

  const handleSearchSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <Toaster />
      <header>
        <SearchBar onSubmit={handleSearchSubmit} />
      </header>
      {loading && !loadingMore && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <div className="load-more-container">
        <div ref={loadMoreRef} aria-live="polite">
          {loadingMore ? (
            <Loader />
          ) : (
            images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
