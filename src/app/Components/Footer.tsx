import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-purple-800 to-pink-700 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
            {/* Add more social media icons as needed */}
          </div>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: Krishnipoobalana@yahoo.com</p>
          <p>Phone : 061 034 1641</p>
          {/* Add more contact details as needed */}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="mb-2 p-2 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-2 p-2 rounded-md text-black"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="mb-2 p-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-4 flex justify-center">
        <a href="/about" className="text-gray-300 hover:text-gray-200 mr-4">
          About
        </a>
        <a
          href="/meditation"
          className="text-gray-300 hover:text-gray-200 mr-4"
        >
          Exercise 1
        </a>
        <a href="/exercise2" className="text-gray-300 hover:text-gray-200 mr-4">
          Exercise 2
        </a>
        <a href="/embrace" className="text-gray-300 hover:text-gray-200 mr-4">
          Embrace
        </a>
        {/* Add links to two other pages */}
      </div>
      <div className="container mx-auto px-4 mt-8">
        <p className="text-center">
          &copy; {new Date().getFullYear()} A NEW WAY OF BEING. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
