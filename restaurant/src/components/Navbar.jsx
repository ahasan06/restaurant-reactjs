/* eslint-disable react/jsx-key */
import Button from "./ui/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../images/Logo.png';
import { useState, useEffect } from "react";

function Navbar() {
  const navMenu = ["Home", "About", "Portfolio", "Clients", "Blog", "Contact"];
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? 'hero-background' : 'bg-transparent'} transition-colors duration-300`}>
      <nav className={`max-w-[1373px]  h-[77px] lg:h-[108px]  z-50 top-0 container mx-auto flex justify-between gap-16 items-center px-6 2xl:px-0 `}>
        <div className="logo font-bold text-xl">
          <img src={logo} alt="logo" className="min-w-[200px]" />
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center justify-between w-full gap-10">
          <nav>
            <ul className="flex md:gap-10 2xl:gap-14">
              {navMenu.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-yellow-400 font-menu text-[16px] text-white">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <Button label="Book a table" className="bg-yellow-400 hover:bg-yellow-600 text-[#0A1425]" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 mobile-nav-background py-4 px-6 rounded-lg shadow-lg">
            <nav>
              <ul className="flex flex-col items-center gap-4">
                {navMenu.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-900 font-semibold hover:text-red-950 font-menu text-[16px]" onClick={toggleMenu}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-4 flex items-center justify-center">
              <Button label="Book a table" className="bg-red-600 text-white hover:bg-red-700" />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
