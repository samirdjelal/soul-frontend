// src/components/layout/Header.tsx
import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

interface NavItem {
  label: string;
  to?: string;            // where to navigate
  isScroll?: boolean;     // in-page scroll on Home
  children?: NavItem[];   // dropdown items
}

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Services",
    children: [
      { label: "Incubation", to: "/incubation" },
      { label: "Mentor Circle", to: "/mentor-circle" },
      { label: "Founder School", to: "/founder-school" },
      { label: "Acceleration", to: "/acceleration" },
    ],
  },
  { label: "Programs", to: "/#programs", isScroll: true },
  { label: "About us", to: "/#about-us", isScroll: true },
  { label: "Contact", to: "/#contact", isScroll: true },
];

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      // if it's an in-page link AND we're already on Home
      if (item.isScroll && pathname === "/") {
        e.preventDefault();
        const id = item.to!.slice(2); // remove "/#"
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
      } else {
        // otherwise let the <Link> do its work
        setMenuOpen(false);
      }
    },
    [pathname]
  );

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img src="/soul-logo.png" alt="SOUL UAQ Logo" />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => {
            if (item.children) {
              // Services dropdown
              return (
                <div className="nav-item dropdown" key={item.label}>
                  <button className="dropdown-toggle">
                    {item.label} ▾
                  </button>
                  <div className="dropdown-menu">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.to!}
                        onClick={(e) => handleClick(e, sub)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.to!}
                onClick={(e) => handleClick(e, item)}
              >
                {item.label}
              </Link>
            );
          })}
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
}
