import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);

  const toggleAbout = () => setAboutOpen(!aboutOpen);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutLinks = [
    { name: "Team", path: "/about/team" },
    { name: "Us", path: "/about/who-we-are" },
    { name: "Media", path: "/about/media" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-xl sm:text-2xl">
            ELIMO SOLUTIONS
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4 relative">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `${styles.navButton} ${isActive ? styles.active : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* About Dropdown */}
          <div className="relative">
            <button
              onClick={toggleAbout}
              className={`${styles.navButton} flex items-center gap-1`}
            >
              About <span className="ml-1 text-sm">&#9662;</span>
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 flex flex-col gap-2 z-50">
                {aboutLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setAboutOpen(false)}
                    className={({ isActive }) =>
                      `${styles.navButton} text-sm ${
                        isActive ? styles.active : ""
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
