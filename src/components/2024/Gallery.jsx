import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const totalImages = 114;
const imagesPerPage = 20;

const Gallery2024 = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(-1);
  const [imagesForAlbum, setImagesForAlbum] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadImageDimensions = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          resolve({ src, width: img.width, height: img.height });
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    const loadImages = async () => {
      setLoading(true);
      const startIndex = (currentPage - 1) * imagesPerPage;
      const endIndex = Math.min(startIndex + imagesPerPage, totalImages);
      try {
        const imagePromises = [];
        for (let i = startIndex; i < endIndex; i++) {
          imagePromises.push(
            loadImageDimensions(`images/images_24/hackathon-24-${i + 1}.jpg`)
          );
        }

        const results = await Promise.all(imagePromises);
        setImagesForAlbum(results);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [currentPage]);

  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 2);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key="first"
          className="page-number"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageNumbers.push(
          <span key="ellipsis-start" className="ellipsis">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-number ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="ellipsis-end" className="ellipsis">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key="last"
          className="page-number"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div id="gallery" className="gallery">
      <h3>
        {t("gallery2024")} <strong>_</strong>
      </h3>
      <div className="gallery-container">
        {loading ? (
          <div className="loading">Loading images...</div>
        ) : (
          <Gallery
            images={imagesForAlbum}
            enableImageSelection={false}
            onClick={(index) => setIndex(index)}
          />
        )}

        <div className="pagination-container bottom">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="pagination-button"
          >
            <RxChevronLeft className="h-5 w-5" />
          </button>
          {renderPageNumbers()}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="pagination-button"
          >
            <RxChevronRight className="h-5 w-5" />
          </button>
        </div>

        <Lightbox
          index={index}
          slides={imagesForAlbum}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
};

export default Gallery2024;
