import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-800/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-gold-500">
            美点汇
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-gold-500"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-sm !px-6 !py-2"
          >
            商务合作
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="bg-navy-800/95 backdrop-blur-md px-4 pb-6 pt-2 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium py-2 transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-gold-500"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="btn-primary text-sm text-center"
          >
            商务合作
          </Link>
        </div>
      </div>
    </nav>
  );
}