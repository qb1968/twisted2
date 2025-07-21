import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can replace with your own icons or SVG

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Team", to: "/team" },
    { name: "Team Gallery", to: "/team-gallery" },
    { name: "Gallery", to: "/gallery" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-[#2D92B3] via-black to-[#1a1a1a] text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link
          to="/"
          className="font-script text-xl font-bold text-white "
        >
          Twisted Sisters
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body hover:text-customBlue underline transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Hamburger icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="font-body block px-2 py-1 rounded hover:bg-customBlue hover:text-black transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
