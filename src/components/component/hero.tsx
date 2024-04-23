import { Button } from "@/components/ui/button";
import backgroundImage from "../../../public/5.jpeg";
import React, { useState, useEffect } from "react";
// import backgroundMusic from "../../../public/dancing.mp3";

function getTitleFromPath(path: string) {
  switch (path) {
    case "/about":
      return "About";
    case "/meditation":
      return "Meditation";
    case "/exercise2":
      return "Exercise 2";
    case "/embrace":
      return "Embrace A New Way of Being ";
    case "/innocence":
      return "Embrace Your Innocence";
    case "/technology":
      return "Technology is GOD???";

    // Add more cases for other pages as needed
    default:
      return "Welcome";
  }
}

const Hero = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isDropdownVisibleContact, setIsDropdownVisibleContact] =
    useState(false);
  const [pageTitle, setPageTitle] = useState("Welcome");

  useEffect(() => {
    setPageTitle(getTitleFromPath(window.location.pathname));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const toggleDropdownContact = () => {
    setIsDropdownVisibleContact(!isDropdownVisibleContact);
  };

  return (
    <>
      <div
        className="relative bg-contain bg-center  animate-fadeIn"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundAttachment: "fixed",
          backgroundSize: "100%",
        }}
      >
        <nav className="flex justify-between items-center py-4 px-8 shadow-lg rounded-lg">
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
                      href="/meditation"
                      className="block hover:bg-gray-200 py-1 px-2 rounded-md"
                    >
                      Exercise 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/exercise2"
                      className="block hover:bg-gray-200 py-1 px-2 rounded-md"
                    >
                      Exercise 2
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="relative">
              <a
                className="block text-white hover:text-gray-200 transition-colors duration-300"
                href="#"
                onClick={toggleDropdownContact}
              >
                Embrace
              </a>
              {isDropdownVisibleContact && (
                <ul className="absolute text-gray-800 bg-white shadow-lg py-2 px-4 mt-2 rounded-lg">
                  <li>
                    <a
                      href="/embrace"
                      className="block hover:bg-gray-200 py-1 px-2 rounded-md"
                    >
                      A new Way of Being
                    </a>
                  </li>
                  <li>
                    <a
                      href="/innocence"
                      className="block hover:bg-gray-200 py-1 px-2 rounded-md"
                    >
                      Your Innocence
                    </a>
                  </li>
                  <li>
                    <a
                      href="/technology"
                      className="block hover:bg-gray-200 py-1 px-2 rounded-md"
                    >
                      Technology
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="flex space-x-4"></div>
        </nav>

        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]  ">
          <h1 className="text-2xl font-bold block text-[#983cc2]  bg-white bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl">
            {pageTitle}
          </h1>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Music
        </Button>
      </div>
    </>
  );
};

export default Hero;
