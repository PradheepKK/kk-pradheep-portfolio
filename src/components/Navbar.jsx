import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";
import { profile } from "../data/profile";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const closeMenu = () => setIsOpen(false);

  // Add a solid background after the page is scrolled a little.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the link of the section currently near the middle of the screen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // While the mobile menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Close the mobile menu automatically when the screen becomes desktop size.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      if (event.matches) setIsOpen(false);
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header className={`navbar ${isScrolled || isOpen ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a
          href="#home"
          className="navbar__logo"
          onClick={closeMenu}
          aria-label={`${profile.name}, go to home section`}
        >
          <span className="navbar__logo-mark">KP</span>
          <span className="navbar__logo-text">{profile.name}</span>
        </a>

        <button
          type="button"
          className={`navbar__toggle ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <nav
          id="primary-navigation"
          className={`navbar__menu ${isOpen ? "is-open" : ""}`}
          aria-label="Primary"
        >
          <ul className="navbar__list">
            {navLinks.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`navbar__link ${isActive ? "is-active" : ""}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={profile.resumePath}
            download={profile.resumeFileName}
            className="btn btn-primary navbar__resume"
            onClick={closeMenu}
          >
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;