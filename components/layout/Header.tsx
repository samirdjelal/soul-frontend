import { useState } from "react";
import "./Header.css";

const navItems = ["Home", "Services", "Programs", "About us", "Contact"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/soul-logo.png" alt="Soul UAQ Logo" />
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a href="#" key={item}>
              {item}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;