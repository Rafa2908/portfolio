import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="navbar-container">
      <Link to={"/"} onClick={closeMenu}>
        <h1>
          Jose <span>Portfolio</span>
        </h1>
      </Link>

      {/* HAMBURGER BUTTON */}
      <button
        className="navbar-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </button>

      {/* NAV LINKS */}
      <ul className={`navbar-items ${isOpen ? "navbar-open" : ""}`}>
        <Link to={"/projects"} onClick={closeMenu}>
          <li>Projects</li>
        </Link>
        <Link to={"/about"} onClick={closeMenu}>
          <li>About</li>
        </Link>
        <Link to={"/contact"} onClick={closeMenu}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
