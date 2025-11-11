import React from "react";

export default function About() {
  return (
    <section className="bg-black text-white min-h-screen px-6 py-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6">About Us</h2>
        <p className="text-lg sm:text-xl">
          At Elimo Solutions, we deliver innovative digital solutions that help businesses scale efficiently, securely, and sustainably. We combine technology, expertise, and strategy to drive measurable growth for our clients.
        </p>
      </div>

      {/* Capabilities, Sustainability, Community & Culture */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Business Capabilities & Growth */}
        <div className="p-6 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Our Capabilities</h3>
          <p>
            We specialize in building robust, intelligent, and scalable digital solutions that empower businesses to streamline operations and achieve long-term growth.
          </p>
        </div>

        {/* Sustainability */}
        <div className="p-6 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
          <p>
            We are committed to sustainable practices in all areas of our operations, minimizing environmental impact while maximizing efficiency and innovation.
          </p>
        </div>

        {/* Giving Back & Culture */}
        <div className="p-6 border border-gray-700 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Community & Culture</h3>
          <p>
            Our values are rooted in integrity, collaboration, and giving back. We support our communities and foster a culture of creativity, inclusion, and excellence within our teams.
          </p>
        </div>
      </div>
    </section>
  );
}
