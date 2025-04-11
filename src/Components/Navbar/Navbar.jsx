import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import UserDropdown from "../UserDropdown/UserDropdown";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home"); // Active link state
  const { user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Change the active link on click
  };

  return (
    <div className="relative">
      {/* ✅ Sticky Navbar */}
      <div className="navbar z-50 fixed w-full backdrop-blur-xl bg-white/30 shadow-md py-6 top-0 left-0 right-0 ">
        {/* Hamburger Icon - Small Devices Only */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black">
            <FaBars size={24} />
          </button>
        </div>

        {/* Site Title - Mobile Center */}
        <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
          <span className="text-xl font-bold">Book Vibe</span>
        </div>

        {/* Site Title - Desktop Left */}
        <div className="hidden lg:flex items-center">
          <NavLink to="/" className="text-xl font-bold">Book Vibe</NavLink>
        </div>

        {/* Center Menu - Desktop */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink 
                to="/" 
                className={`font-semibold px-4 py-2 ${activeLink === "Home" ? "bg-green-500 text-white" : "text-gray-500"}`}
                onClick={() => handleLinkClick("Home")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/books" 
                className={`font-semibold px-4 py-2 ${activeLink === "ListedBooks" ? "bg-green-500 text-white" : "text-gray-500"}`}
                onClick={() => handleLinkClick("ListedBooks")}
              >
                Listed Books
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/pages-of-read" 
                className={`font-semibold px-4 py-2 ${activeLink === "PagesOfRead" ? "bg-green-500 text-white" : "text-gray-500"}`}
                onClick={() => handleLinkClick("PagesOfRead")}
              >
                Pages of Read
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Right Side - Sign In/Up or UserDropdown */}
        <div className="ml-auto">
          {user ? (
            <UserDropdown />
          ) : (
            <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2">
              <NavLink to="/signin" className="btn bg-green-500 text-white h-10 w-28 hover:bg-green-700">
                Sign In
              </NavLink>
              <NavLink to="/signup" className="btn text-white h-10 w-28 bg-[#26B2B2] hover:bg-[#1a8f8f]">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-white shadow-md px-4`}>
        <ul className="menu p-4">
          <li>
            <NavLink 
              to="/" 
              className={`block py-2 font-semibold ${activeLink === "Home" ? "bg-green-500 text-white" : "text-gray-500"}`}
              onClick={() => handleLinkClick("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/listed-books" 
              className={`block py-2 font-semibold ${activeLink === "ListedBooks" ? "bg-green-500 text-white" : "text-gray-500"}`}
              onClick={() => handleLinkClick("ListedBooks")}
            >
              Listed Books
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/pages-of-read" 
              className={`block py-2 font-semibold ${activeLink === "PagesOfRead" ? "bg-green-500 text-white" : "text-gray-500"}`}
              onClick={() => handleLinkClick("PagesOfRead")}
            >
              Pages of Read
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
