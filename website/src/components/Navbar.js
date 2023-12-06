import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="py-4 px-16 fixed w-full" style={{ background: 'linear-gradient(to right, #4b5563, #8d99ae)' }}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white mr-6">
            <Link to="/" className="text-white hover:text-gray-300">
              Accueil
            </Link>
          </h1>
        </div>
        <div className="relative">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
            onBlur={() => setShowDropdown(false)}
          >
            Compétences
          </button>
          {showDropdown && (
            <div className="absolute mt-2 bg-gray-800 rounded-md shadow-lg text-sm w-full">
              <Link
                to="/entreprendre"
                className="block text-white py-2 pl-2 hover:bg-gray-700"
              >
                Entreprendre
              </Link>
              <Link
                to="/developper"
                className="block text-white py-2 pl-2 w-full hover:bg-gray-700 hover:rounded-b-md"
              >
                Développer
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
