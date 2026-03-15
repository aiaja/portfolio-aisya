"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-beige/95 backdrop-blur-md shadow-sm" : "bg-beige/80 backdrop-blur-sm"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-green-primary font-bold text-lg tracking-tight hover:opacity-75 transition-opacity no-underline">
          aisya.dev
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-charcoal text-sm font-medium hover:text-green-primary transition-colors duration-200 no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <div className="hidden md:block">
          <Button href="mailto:aisyafirst@gmail.com" variant="solid" size="md">
            Hire Me
          </Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-full hover:bg-charcoal/10 transition-colors text-charcoal border-none bg-transparent cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}>
        <div className="bg-beige border-t border-charcoal/10 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-charcoal text-sm font-medium hover:text-green-primary transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1">
            <Button href="mailto:aisyafirst@gmail.com" variant="solid" size="md" className="w-full justify-center">
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}