/* eslint-disable react/jsx-key */
import Button from "./ui/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../images/Logo.png'
import { useState } from "react";
function Navbar() {
    const navMenue = ["Home", "Portfolio", "Clients", "Blog", "Contact"]
    const [isOpen,setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
    return (
    <header className="sticky top-0 container mx-auto flex justify-between gap-16 items-center px-6 py-4  text-white">
        <div className="logo font-bold text-xl">
            <img src={logo} alt="" />
        </div>
      {/* Desktop Menu */}
        <div className=" hidden md:flex items-center justify-between  w-full gap-10">
            <nav>
                <ul className="flex gap-4">
                    {navMenue.map((item) => (
                        <li>
                            <a href="#" className="hover:text-yellow-400 font-menu text-[15px]">{item}</a>
                        </li>
                    ))}
                </ul>
            </nav>
             <Button label="Book a table"  className="bg-yellow-400  hover:bg-yellow-600 text-[#0A1425]"/>
        </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars/>}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
         <div className="md:hidden  absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 mobile-nav-background py-4 px-6 rounded-lg shadow-lg">
          <nav>
            <ul className="flex flex-col items-center gap-4">
              {navMenue.map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-900 font-semibold hover:text-red-950 font-menu text-[20px]" onClick={toggleMenu}>
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
           
    </header>
    );
}

export default Navbar;
