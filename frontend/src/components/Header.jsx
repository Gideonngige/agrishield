import React from "react";
import { Link } from "react-router-dom";
import { CloudSun } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <CloudSun
            size={32}
            className="text-green-600"
          />

          <div>
            <h1 className="text-xl font-bold text-green-700">
              AgriShield AI
            </h1>

            <p className="text-xs text-gray-500">
              Smart Farming Intelligence
            </p>
          </div>
        </Link>

        <nav className="flex gap-6">

          <Link
            to="/"
            className="text-gray-600 hover:text-green-600"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-green-600"
          >
            Dashboard
          </Link>

          <Link
            to="/tree-analysis"
            className="text-gray-600 hover:text-green-600"
          >
            Tree Analysis
          </Link>

        </nav>

      </div>

    </header>
  );
};

export default Header;