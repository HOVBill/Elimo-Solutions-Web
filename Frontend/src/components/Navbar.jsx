import React, { useState, useEffect } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const toggleAbout = () => setAboutOpen(!aboutOpen);

  const handleSearch = (e) => {
  if (e.key === "Enter" && search.trim()) {
    navigate(`/services?search=${encodeURIComponent(search)}`);
    setSearch("");
  }
};

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const aboutLinks = [
    { name: "Team", path: "/about/team" },
    { name: "Us", path: "/about/us" },
    { name: "Media", path: "/about/media" },
  ];

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navScrolled : ""}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO IMAGE + NAME */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Elimo Logo" className={styles.logoImage} />
          <span className={styles.brandName}>ELIMO SOLUTIONS</span>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex items-center gap-6 relative">

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

          {/* ABOUT PILL BUTTON WITH ICON */}
          <div className="relative">
            <button
              onClick={toggleAbout}
              className={`${styles.navButton} ${styles.aboutPill} flex items-center gap-2`}
            >
              <span className={styles.aboutIcon}>ℹ️</span>
              <span>About</span>

              <span
                className={`${styles.arrow} ${
                  aboutOpen ? styles.arrowOpen : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* ABOUT DROPDOWN */}
            {aboutOpen && (
              <div className={`${styles.dropdownWrapper} ${styles.dropdownOpen}`}>
                <div className={styles.dropdown}>
                  {aboutLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      onClick={() => setAboutOpen(false)}
                      className={({ isActive }) =>
                        `${styles.dropdownItem} ${isActive ? styles.active : ""}`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* SEARCH + CTA */}
        <div className="flex items-center gap-4">
          <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className={styles.searchInput}
            />

          <button className={styles.ctaButton}>Get Started</button>
        </div>

      </div>
    </nav>
  );
}
