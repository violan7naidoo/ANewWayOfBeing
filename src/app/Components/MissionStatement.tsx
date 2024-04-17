"use client";

import React, { useEffect, useState } from "react";

const MissionStatement = () => {
  return (
    <section className="py-8 animate-fadeIn2 bg-fixed animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 ">
      <div className="grid items-center justify-center gap-2">
        <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300  ">
          Mission Statement
        </h2>
        <br />
      </div>

      <div className="grid items-center justify-center gap-6 text-center">
        <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
          Each of us at A NEW WAY OF BEING realizes that we have been given this
          awesome gift of Life that together we will co create heaven on earth
        </p>
        <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
          By this we mean that we will consciously allow OUR DIVINE Souls to
          lead the way.
        </p>
        <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
          Our intention is to co-create a beautiful world where we are aware of
          the gifts that the Divine bestows upon us and to share these gifts
          generously wirth our companions along the way.
        </p>
        <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
          Our intention is to co-create A NEW WAY OF BEING where we will
          consciously intergrate body, mind and soul thus creating. INTEGRITY IN
          ALL AREAS OF OUR LIVES.
        </p>
        <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
          Our intention is to allow the energy to consciously flow from our
          heart space thus ensuring that our every thought, word and deed with
          be imbued with the Divine POWER of LOVE.
        </p>
      </div>
    </section>
  );
};

export default MissionStatement;
