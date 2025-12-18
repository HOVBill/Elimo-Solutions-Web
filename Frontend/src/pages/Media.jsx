// src/pages/MediaPage.jsx
import React, { useState } from "react";
import "../styles/Media.css";

export default function MediaPage() {
  const mediaImages = [
    "/images/Media1.jpg",
    "/images/Media2.jpg",
    "/images/Media3.jpg",
    "/images/Media4.jpg",
    "/images/Media5.jpg",
    "/images/Media6.jpg",
    "/images/Media.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="media-wrapper">

      {/* Title */}
      <h1 className="media-title">Company Media</h1>
      <p className="media-subtitle">
        Explore highlights and moments from Elimo Solutions.
      </p>

      {/* Masonry Image Grid */}
      <div className="media-grid">
        {mediaImages.map((src, index) => (
          <div
            key={index}
            className="media-card"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Media ${index + 1}`}
              className="media-image"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="media-lightbox" onClick={() => setSelectedImage(null)}>
          <div className="media-lightbox-content">
            <img src={selectedImage} alt="Selected" className="media-lightbox-img" />

            {/* Close button */}
            <button
              className="media-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
