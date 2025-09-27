"use client";

import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/image.png"
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "For User", path: "/user-match" },
    { name: "For Organisation", path: "/organization-dashboard" },
    { name: "Analysis", path: "/analysis" },
    { name: "Allocation", path: "/allocation" },
  ];

  const govLinks = [
    { name: "MyGov.in", path: "https://www.mygov.in/" },
    { name: "Digital India", path: "https://digitalindia.gov.in/" },
    { name: "India.gov.in", path: "https://www.india.gov.in/" },
    { name: "Make in India", path: "https://www.makeinindia.com/" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Section 1 */}
          <div>
            <div className="flex gap-2">
              <img className="h-10 text-white bg-white rounded-md p-0.5" src={Img}/>
            <h4 className="mt-2 text-xl font-bold text-orange-400 mb-4">
               Internship India
            </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Government of India initiative for skill-based internship
              allocation using AI technology.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Government Links
            </h4>
            <ul className="space-y-2">
              {govLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={scrollToTop}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 Government of India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
