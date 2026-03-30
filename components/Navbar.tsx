import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Matruchhaya Balakashram Logo" className="h-12 w-12 object-contain" />
          <span className="font-heading text-lg font-bold text-primary hidden sm:inline">Matruchhaya Balakashram</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/70 hover:text-primary font-medium transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-accent text-sm py-2 px-6 rounded-full">
            Donate Now
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-foreground/70 hover:text-primary font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-accent inline-block mt-2 text-sm py-2 px-6 rounded-full">
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
