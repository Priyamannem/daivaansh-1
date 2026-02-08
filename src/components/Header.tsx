import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "Ventures", path: "/ventures" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !transparent
        ? "bg-white/95 backdrop-blur-md shadow-md py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-3 group">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center p-1.5 transition-all shadow-md group-hover:shadow-lg border border-gold/20 ${isScrolled || !transparent ? "bg-white" : "bg-white/90 backdrop-blur-sm"
              }`}>
              <img src={logoImg} alt="Daivaansh Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-lg md:text-xl leading-tight transition-colors ${isScrolled || !transparent ? "text-forest" : "text-white"
                }`}>
                Daivaansh
              </span>
              <span className={`font-serif font-bold text-lg md:text-xl leading-tight transition-colors ${isScrolled || !transparent ? "text-forest" : "text-white"
                }`}>
                Infra
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-all hover:text-accent ${isScrolled || !transparent ? "text-forest" : "text-white"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant={isScrolled || !transparent ? "gold" : "hero-outline"}
              size="sm"
              className={`font-bold px-6 shadow-sm ${!(isScrolled || !transparent) && "bg-white/10 hover:bg-white/20 border-white/50 text-white"}`}
              asChild
            >
              <Link to="/book-site-visit">Book Site Visit</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled || !transparent ? "text-forest" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  to={link.path}
                  className="text-lg font-semibold py-4 px-4 text-forest hover:bg-forest/5 rounded-xl transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100 mt-2">
                <Button variant="gold" size="lg" className="w-full font-bold h-14 text-lg" asChild>
                  <Link to="/book-site-visit" onClick={() => setIsMenuOpen(false)}>
                    Book Site Visit
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
