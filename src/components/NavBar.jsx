"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import sm from "../assets/image.png";

export default function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paddingTop, setPaddingTop] = useState(64); // default navbar height

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "For User", path: "/user-match" },
    { name: "For Organisation", path: "/organization-dash" },
    { name: "Admin Portal", path: "/analysis" },
  ];

  useEffect(() => {
    setPaddingTop(isOpen ? 64 + 320 : 64); // Adjust padding for mobile menu
  }, [isOpen]);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-300 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 relative">
              <img src={sm} className="h-10" alt="Logo" />
              <div className="flex flex-col">
                <Link
                  to="/"
                  className="text-xl font-bold text-orange-500"
                >
                  Internship India
                </Link>
                <span className="text-xs text-gray-800">Ministry Of Corporate Affairs</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-700 hover:text-blue-700 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                to="/login"
                className="ml-3 px-4 py-2 bg-orange-400 text-white rounded-md shadow hover:bg-orange-600 transition"
              >
                Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-700 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-inner">
            <div className="px-6 py-4 flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-gray-700 py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-700 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="block text-center px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content with dynamic padding */}
      <main style={{ paddingTop }}>{children}</main>
    </>
  );
}
