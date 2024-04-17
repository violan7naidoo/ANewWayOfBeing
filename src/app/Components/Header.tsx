"use client";
import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/18.jpeg"; // Replace with the path to your image file

const Header = () => {
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
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
          <h1 className="text-2xl font-bold block text-[#4c9cec]  bg-white bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl">
            Join Us in Co-Creation
          </h1>
          <p className="text-center block text-[#eecb49] font-semibold  bg-white bg-opacity-80 p-4 mb-4 mx-8 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl">
            Dear Beloved Co-creator I invite you to join me in co-creating A NEW
            WAY OF BEING. for centuries humans have focused on DOING. The time
            has now come for humans to focus ON BEING I am at present working on
            this divinely guided PROJECT called A NEW WAY OF BEING. The
            intention here is to bring to the Awareness of people that we can
            bring in the NEW EARTH, that we can together co-create heaven on
            EARTH, when we consciously choose to embrace this NEW WAY of BEING.
            In this project, we will intend to infiltrate?? no, let's not use
            this word infiltrate because it reeks of the old way of Being,
            Right? Instead we will use the word FLOW.. we will FLOW into all
            areas of life. ..the home... the school ...the business ...the
            industries ... the government.... the work force and so on . We will
            allow our EGOs to rest now and allow our Divine Souls to consciously
            lead the way. Our intention will be to realize (to make it real!)
            that we are all ONE and that as we embrace this NEW WAY OF BEING, we
            can live together in LOVE, in PEACE, in Joy in HARMONY and most of
            all in GRATITUDE for this wondrous gift of LIFE.
          </p>
          <p className="text-center block text-[#4c9cec] font-semibold  bg-white p-4 bg-opacity-80 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl">
            Let us embark on this magical, joyful journey to A New Way of Being.
          </p>
          <p className="text-center block text-[#4c9cec] font-semibold  bg-white bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl">
            From the Heart With boundless love and blessings,
          </p>
        </div>
        {/* <div className="flex justify-center space-x-2 py-4 bg-red-400">
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-3 h-3 bg-white rounded-full opacity-50" />
        <div className="w-3 h-3 bg-white rounded-full opacity-50" />
      </div> */}

        <div className=" grid gap-4 p-4 md:grid-cols-3" id="sectionId">
          <div className="flex flex-col space-y-2 bg-white bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl ">
            <h3 className="text-lg text-gradient1 font-semibold">
              Gift of Life
            </h3>
            <p className="text-sm text-[#4c9cec] dark:text-gray-400">
              Each of us at A NEW WAY OF BEING realizes that we have been given
              this awesome gift of Life that together we will co create heaven
              on earth
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-white bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl ">
            <h3 className="text-lg text-gradient1 font-semibold">
              Our Devine Souls
            </h3>
            <p className="text-sm text-[#4c9cec] dark:text-gray-400">
              By this we mean that we will consciously allow OUR DIVINE Souls to
              lead the way
            </p>
          </div>
          <div className="flex flex-col space-y-2 bg-white  bg-opacity-80 p-4 mb-4 animate-fadeIn2 transform transition-transform hover:transform hover:scale-105 hover:bg-gray-100 rounded-xl ">
            <h3 className="text-lg text-gradient1 font-semibold">
              Share Your Gifts
            </h3>
            <p className="text-sm text-[#4c9cec] dark:text-gray-400">
              Our intention is to co-create a beautiful world where we are aware
              of the gifts that the Divine bestows upon us and to share these
              gifts generously wirth our companions along the way.
            </p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Button2
        </button>
      </div>
    </>
  );
};

export default Header;
