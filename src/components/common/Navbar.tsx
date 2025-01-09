import { Grid, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "About", "Products", "Contact"];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1920px] mx-auto bg-gradient-to-r from-black/20 via-black/10 to-black/10 backdrop-blur-sm">
        <div className="w-full flex items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 lg:py-5">
          <Link to="/" className="flex items-center space-x-3 lg:space-x-4">
            <Grid className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white" />
            <span className="text-white text-lg sm:text-xl lg:text-2xl font-prata font-semibold tracking-wide">
              Heirloom
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 lg:space-x-12 xl:space-x-16">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
                  className="text-white text-sm lg:text-base xl:text-lg leading-relaxed tracking-wider font-martian font-medium hover:text-gray-200 transition-colors duration-300 text-[#D0CAC6]"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1.5"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 sm:h-7 sm:w-7" />
            ) : (
              <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black/20 via-black/10 to-black/10 backdrop-blur-sm border-t border-white/10">
          <ul className="flex flex-col items-center py-6 space-y-6">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item.toLowerCase() === "home" ? "/" : item.toLowerCase()}
                  className="text-white text-base sm:text-lg leading-relaxed tracking-wider font-martian font-medium hover:text-gray-200 transition-colors duration-300 text-[#D0CAC6]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
