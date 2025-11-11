// src/layouts/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content area with top padding to offset navbar height */}
      <main className="flex-1 pt-32 sm:pt-36 px-6 sm:px-10 transition-all duration-300">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
