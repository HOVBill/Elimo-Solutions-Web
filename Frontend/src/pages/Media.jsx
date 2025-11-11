// src/pages/MediaPage.jsx
import React, { useState } from "react";

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
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Company Media</h1>
      <p className="text-center mb-12 text-lg max-w-2xl mx-auto">
        Explore highlights and moments from Elimo Solutions.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {mediaImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg border border-gray-700 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Media ${index + 1}`}
              className="w-full h-32 sm:h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage}
              alt="Selected media"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
