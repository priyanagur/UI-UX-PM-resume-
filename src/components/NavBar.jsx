import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [paddingTop, setPaddingTop] = useState(64); // default navbar height (16 * 4px)

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "For User", path: "/user-match" },
    { name: "For Organisation", path: "/organization-dashboard" },
    { name: "Analysis", path: "/analysis" },
    { name: "Allocation", path: "/allocation" },

  ];

  // Update padding when mobile menu opens/closes
  useEffect(() => {
    if (isOpen) {
      // approximate expanded height of navbar + mobile menu
      setPaddingTop(64 + 320); // navbar height + mobile menu height
    } else {
      setPaddingTop(64);
    }
  }, [isOpen]);

  return (
    <>
      {/* Navbar (fixed) */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between h-16 items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-600 tracking-tight hover:scale-105 transition-transform"
            >
              MyBrand
            </Link>

            <nav className="hidden md:flex space-x-8 items-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-700 font-medium hover:text-blue-600 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                to="/login"
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur border-t border-gray-200 shadow-inner">
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block text-gray-700 font-medium py-2 px-3 rounded hover:bg-blue-50 hover:text-blue-600 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content with dynamic padding */}
      <main style={{ paddingTop: paddingTop }}>{children}</main>
    </>
  );
}
