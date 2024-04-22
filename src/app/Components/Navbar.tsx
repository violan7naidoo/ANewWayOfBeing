import { Button } from "@/components/ui/button";
import backgroundImage from "../../../public/5.jpeg";
import React, { useState } from "react";

export function Navbar() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  <nav className="flex justify-between items-center py-4 px-8 shadow-lg rounded-lg  ">
    <div className="flex space-x-6">
      <a
        className="block text-white font-semibold hover:text-gray-200 transition-colors duration-300"
        href="/"
      >
        A NEW WAY OF BEING
      </a>

      <a
        className="block text-white hover:text-gray-200 transition-colors duration-300"
        href="/about"
      >
        About Us
      </a>
      <div className="relative">
        <a
          className="block text-white hover:text-gray-200 transition-colors duration-300"
          href="#"
          onClick={toggleDropdown}
        >
          Meditation
        </a>
        {isDropdownVisible && (
          <ul className="absolute text-gray-800 bg-white shadow-lg py-2 px-4 mt-2 rounded-lg">
            <li>
              <a
                href="#"
                className="block hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Mindfulness
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Guided
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block hover:bg-gray-200 py-1 px-2 rounded-md"
              >
                Transcendental
              </a>
            </li>
          </ul>
        )}
      </div>
      <a
        className="block text-white hover:text-gray-200 transition-colors duration-300"
        href="#"
      >
        Contact
      </a>
    </div>
    <div className="flex space-x-4"></div>
  </nav>;
}
export default Navbar;
