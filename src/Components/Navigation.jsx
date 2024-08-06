import React, { useState } from "react";
import Home from "../Pages/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import { FaBars } from "react-icons/fa"; // Import the menu icon from react-icons/fa
import { Link, Route, Routes } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="container px-5">
        <div className="flex justify-between py-4 items-center">
          <div>
            <h2 className="font-bold font-serif text-xl">Maxium</h2>
          </div>

          {/* Menu Icon for mobile and tablet */}
          <div className="flex items-center gap-5 lg:hidden relative">
            {" "}
            {/* Show only on mobile and tablet screens */}
            <FaBars
              className="text-gray-700 cursor-pointer"
              size={24} 
              onClick={toggleMenu}
            />
            {/* Small listing menu */}
            {isOpen && (
              <div className="absolute right-0 top-10 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                <ul className="flex flex-col gap-3 p-3 text-sm font-sans">
                  {/* Use map to generate <li> elements */}
                  {["Home", "About", "Service", "Blog", "Contact"].map(
                    (item, index) => (
                      <li
                        key={index}
                        className="nav-link text-sm font-sans transition-colors duration-400 hover:text-customButton"
                      >
                        <Link 
                          to={`/${item.toLowerCase()}`} 
                          onClick={handleLinkClick}
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Menu items for large screens */}
          <div className="hidden lg:flex items-center gap-5">
            {" "}
            {/* Show only on large screens */}
            <ul className="flex gap-5 text-sm font-sans">
              {/* Use map to generate <li> elements */}
              {["Home", "About", "Service", "Blog", "Contact"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="nav-link text-sm font-sans transition-colors duration-400 hover:text-customButton"
                  >
                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                  </li>
                )
              )}
            </ul>
            <button className="text-sm text-white font-bold font-sans border border-transparent bg-customButton rounded-md px-4 py-2 hover:bg-orange-400">
              Book Online
            </button>
          </div>
        </div>
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} /> {/* Fallback route */}
      </Routes>
    </>
  );
};

export default Navigation;
