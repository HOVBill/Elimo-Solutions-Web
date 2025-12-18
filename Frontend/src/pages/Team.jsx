import React, { useEffect } from "react";
import "../styles/team.css";

export default function Team() {

  // SCROLL ANIMATION OBSERVER
  useEffect(() => {
    const elements = document.querySelectorAll(".team-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up");
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);


  const teamMembers = [
    {
      name: "THABO MAKUWA",
      role: "Founder & Consultant",
      desc: "Driven by innovation and integrity, committed to delivering excellence.",
      img: "/images/Founder1.png",
    },
    {
      name: "TEBOGO MOKOENA",
      role: "Cloud Solutions Specialist",
      desc: "Focused on building scalable cloud solutions with clean and modern architecture.",
      img: "/images/cloudsolution.png",
    },
    {
      name: "THENDO RAMASHIA",
      role: "Business Analyst Lead",
      desc: "Crafting high-performance processes that scale with your business needs",
      img: "/images/Business-Analyst.png",
    },
    {
      name: "THABISO ZONDI",
      role: "ERP LEAD",
      desc: "Designing stable, secure and enterprise resource systems that intergrate business units and external sources.",
      img: "/images/ERP Lead.png",
    },
  ];


  return (
    <div className="team-container flex flex-col items-center px-6 py-20">

      {/* Title */}
      <h1 className="team-title text-4xl font-bold mb-6 text-center">
        Our Team
      </h1>

      <p className="text-center mb-16 text-lg max-w-2xl">
        The talented individuals powering Elimo Solutions' innovation.
      </p>

      {/* GRID */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`team-card delay-${index}`}
          >
            <div className="team-img-wrapper">
              <img src={member.img} className="w-full h-full object-cover" />
            </div>

            <h2 className="mt-4 text-xl font-semibold text-white">
              {member.role}
            </h2>

            <h3 className="text-md mt-1 font-bold text-elimo">
              {member.name}
            </h3>

            <p className="mt-2 text-sm text-gray-300">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
