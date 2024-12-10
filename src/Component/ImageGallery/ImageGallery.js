import React, { useState, useRef, useEffect } from "react";
import "./ImageGallery.css";

import img1 from "../../assets/images/image1.jpg";
import img2 from "../../assets/images/image2.jpg";
import img3 from "../../assets/images/image3.jpg";
import img4 from "../../assets/images/image4.jpg";
import img5 from "../../assets/images/image5.jpg";
import img6 from "../../assets/images/image6.jpg";
import img7 from "../../assets/images/image7.jpg";
import img8 from "../../assets/images/image8.jpg";
import img9 from "../../assets/images/image9.jpg";
import img10 from "../../assets/images/image10.jpg";
import img11 from "../../assets/images/image11.jpg";
import img12 from "../../assets/images/image12.jpg";
import img13 from "../../assets/images/image13.jpg";

// Add more imports as needed...

export default function ImageGallery() {
  const [imageGalleryOpened, setImageGalleryOpened] = useState(false);
  const [imageGalleryActiveUrl, setImageGalleryActiveUrl] = useState(null);
  const [imageGalleryImageIndex, setImageGalleryImageIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleImagesCount, setVisibleImagesCount] = useState(4); // Show 4 images initially
  const imagesPerLoad = 4; // Load 4 images on each click
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    // Add more imported images
  ];

  useEffect(() => {
    if (!imageGalleryOpened) {
      const timeoutId = setTimeout(() => setImageGalleryActiveUrl(null), 300);
      return () => clearTimeout(timeoutId);
    }
  }, [imageGalleryOpened]);

  const openImageGallery = (index) => {
    setImageGalleryImageIndex(index);
    setImageGalleryActiveUrl(images[index]);
    setImageGalleryOpened(true);
    setIsLoading(true);
  };

  const closeImageGallery = () => setImageGalleryOpened(false);

  const nextImage = () => {
    const nextIndex = (imageGalleryImageIndex + 1) % images.length;
    setImageGalleryImageIndex(nextIndex);
    setImageGalleryActiveUrl(images[nextIndex]);
    setIsLoading(true);
  };

  const prevImage = () => {
    const prevIndex = (imageGalleryImageIndex - 1 + images.length) % images.length;
    setImageGalleryImageIndex(prevIndex);
    setImageGalleryActiveUrl(images[prevIndex]);
    setIsLoading(true);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
    }
  };

  useEffect(() => {
    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowRight":
          nextImage();
          break;
        case "ArrowLeft":
          prevImage();
          break;
        case "Escape":
          closeImageGallery();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [imageGalleryImageIndex]);

  const loadMoreImages = () => {
    setVisibleImagesCount((prevCount) => Math.min(prevCount + imagesPerLoad, images.length));
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4">
          <span className="text-white">Our</span> Gallery
        </h1>
        <p className="gallery-description">Discover beautiful moments</p>
      </header>

      <section className="gallery-grid-container">
        <ul className="gallery-grid">
          {images.slice(0, visibleImagesCount).map((image, index) => (
            <li key={index} className="gallery-item">
              <img
                onClick={() => openImageGallery(index)}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
        {visibleImagesCount < images.length && (
          <button className="view-more-btn" onClick={loadMoreImages}>
            View More
          </button>
        )}
      </section>

      {imageGalleryOpened && (
        <div
          className="gallery-lightbox"
          onClick={closeImageGallery}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="gallery-lightbox-content">
            {isLoading && (
              <div className="gallery-loader">
                <span>Loading...</span>
              </div>
            )}
            <img
              className="gallery-lightbox-image"
              src={imageGalleryActiveUrl}
              alt="Gallery"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
