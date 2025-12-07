import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Blossoms from "../assets/blossoms.png";
import { Link } from "react-router-dom";
import Account from "./AccountMenu";

// Custom hook to detect clicks outside
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

// User profile dropdown component
const UserProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 200); // slight delay
  };

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FiUser className="text-2xl cursor-pointer" />

      {isOpen && (
        <div
          className="
            absolute right-0 mt-3 
            w-80 min-w-max 
            bg-white border border-gray-100 rounded-2xl 
            shadow-xl z-50 
            transition duration-200 ease-out
          "
        >
          <Account />
        </div>
      )}

      <span className="absolute top-0 right-0 w-2 h-2 bg-green-400 rounded-full"></span>
    </div>
  );
};

// Main Navbar component
export default function Navbar() {
  return (
    <div className="w-full bg-pink-100 shadow-sm sticky top-0 px-4 z-50">
      <div className="mx-auto px-10 py-3 flex items-center justify-between">

        {/* Logo */}
        <div>
          <img
            src={Blossoms}
            alt="Blossoms Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Search */}
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Botanical flowers"
            className="
              w-full pl-5 pr-12 py-2 rounded-full 
              bg-white text-black placeholder-[#9F9F9F]
              border border-white/40 focus:outline-none 
              focus:ring-2 focus:ring-primary
              transition-all
            "
          />
          <div
            className="
              absolute right-2 top-1/2 -translate-y-1/2 
              bg-primary p-2 rounded-full cursor-pointer 
              hover:bg-pink-500 transition
            "
          >
            <FiSearch className="text-white text-lg" />
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center space-x-6 text-primary font-medium">
          <a href="#" className="hover:text-pink-900">Home</a>
          <a href="#" className="hover:text-pink-900">Products</a>
          <Link to="/login" className="hover:text-pink-900">Login</Link>
          <a href="#" className="hover:text-pink-900">Sign In</a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-primary">
          <UserProfileDropdown />
          <FiShoppingCart className="text-2xl cursor-pointer" />
        </div>

      </div>
    </div>
  );
}
