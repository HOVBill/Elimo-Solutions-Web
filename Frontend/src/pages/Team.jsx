// src/pages/Team.jsx
import React from "react";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Team</h1>
      <p className="text-center mb-12 text-lg max-w-2xl">
        Meet the amazing people behind ELIMO Solutions.
      </p>

      {/* Founder Section */}
<div className="flex flex-col items-center text-center max-w-xs">
  <div className="w-10 h-10 sm:w-14 sm:h-14 overflow-hidden rounded-full border border-red-600 shadow-md">
    <img
      src="/images/Founder1.png"
      alt="Company Founder"
      className="w-full h-full object-contain"
    />
  </div>
  <h2 className="mt-4 text-lg sm:text-xl font-semibold">FOUNDER <br/> THABO MAKUWA</h2>
  <p className="mt-2 text-sm sm:text-base text-gray-300">
    Driven by innovation and integrity, committed to delivering excellence.
  </p>
</div>
    </div>
  );
}
