import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`font-press fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        bg-white/80 backdrop-blur shadow
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Assembly</h1>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white/90"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-600" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/member"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-blue-600" : ""}`
              }
            >
              Profile
            </NavLink>
          </li>
          {/* <li>
            <a href="#gallery" className="hover:text-blue-500">
              Gallery
            </a>
          </li> */}
        </ul>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95">
          <ul className="px-4 py-4 flex flex-col gap-4 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-blue-500 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/member"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `hover:text-blue-500 ${isActive ? "text-blue-600" : ""}`
                }
              >
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
