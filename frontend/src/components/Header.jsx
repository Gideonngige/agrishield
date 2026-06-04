import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CloudSun,
  Menu,
  X,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* LOGO */}

          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMenu}
          >
            <div className="bg-green-100 p-2 rounded-xl">
              <CloudSun
                size={30}
                className="text-green-600"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-green-700">
                AgriShield AI
              </h1>

              <p className="text-xs text-gray-500">
                Smart Farming Intelligence
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}

          <nav className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="font-medium text-gray-600 hover:text-green-600 transition"
            >
              Home
            </Link>

            <Link
              to="/dashboard"
              className="font-medium text-gray-600 hover:text-green-600 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/tree-analysis"
              className="font-medium text-gray-600 hover:text-green-600 transition"
            >
              Tree Analysis
            </Link>

            <Link
              to="/dashboard"
              className="bg-green-600 text-white px-5 py-2 rounded-xl hover:bg-green-700 transition"
            >
              Get Started
            </Link>

          </nav>

          {/* MOBILE BUTTON */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? (
              <X
                size={28}
                className="text-gray-700"
              />
            ) : (
              <Menu
                size={28}
                className="text-gray-700"
              />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 border-t"
            : "max-h-0"
        }`}
      >
        <nav className="bg-white px-6 py-5 flex flex-col gap-5">

          <Link
            to="/"
            onClick={closeMenu}
            className="font-medium text-gray-700 hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="font-medium text-gray-700 hover:text-green-600"
          >
            Dashboard
          </Link>

          <Link
            to="/tree-analysis"
            onClick={closeMenu}
            className="font-medium text-gray-700 hover:text-green-600"
          >
            Tree Analysis
          </Link>

          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="bg-green-600 text-white text-center py-3 rounded-xl hover:bg-green-700 transition"
          >
            Get Started
          </Link>

        </nav>
      </div>

    </header>
  );
};

export default Header;