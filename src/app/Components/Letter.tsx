import React from "react";
import Link from "next/link";

export function Letter() {
  return (
    <section>
      <div className="w-full grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
        <div className="grid items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
            Open Letter
          </h2>
        </div>

        <div className="grid items-center justify-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl hover:text-gray-200  duration-300  transform transition-transform hover:transform hover:scale-105 ">
            Dear Beloved Co-creator
          </h2>
          <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200  duration-300 transform transition-transform hover:transform hover:scale-105 ">
            For centuries, humans have focused on DOING. The time has now come
            for humans to focus ON BEING. I am at present working on this
            divinely guided PROJECT called A NEW WAY OF BEING.
          </p>
          <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
            The intention here is to bring to the Awareness of people that we
            can bring in the NEW EARTH, that we can together co-create heaven on
            EARTH, when we consciously choose to embrace this NEW WAY of BEING.
          </p>
          <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
            In this project, we will intend to FLOW into all areas of life: the
            home, the school, the business, the industries, the government, the
            work force, and so on. We will allow our EGOs to rest now and allow
            our Divine Souls to consciously lead the way.
          </p>
          <p className="mx-auto max-w-[700px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
            Our intention will be to realize - to make it real! - that we are
            all ONE and that as we embrace this NEW WAY OF BEING, we can live
            together in LOVE, in PEACE, in Joy in HARMONY, and most of all in
            GRATITUDE for this wondrous gift of LIFE.
          </p>
        </div>

        <div className="mx-auto flex justify-center items-center">
          <div
            className="overflow-hidden rounded-xl"
            style={{ width: "500px", height: "500px" }}
          >
            <img
              alt="Banner Feature"
              className="object-cover object-center h-full w-full"
              src="/10.jpeg"
            />
          </div>
        </div>

        <div className="grid items-center justify-center gap-2">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl transform transition-transform hover:transform hover:scale-105 duration-300">
            If, as you read my words
          </h2>
          <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 transform transition-transform hover:transform hover:scale-105 duration-300">
            you feel that it resonates with something deep within you, then let
            me know because this project is for the collective where we will
            each bring our unique, individual gifts to the table. and together
            we will consciously choose to co-create on a beautiful and inspiring
            journey this incredibly beautiful Planet called EARTH. For now, this
            is the place we call home so let us come together and beautify our
            planet with our divine thoughts, words and deeds
          </p>
        </div>
        <div className="mx-auto grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2">
          <div className="aspect-video overflow-hidden rounded-lg border">
            <img
              alt="Large Image"
              className="object-cover object-center"
              height="300"
              src="/7.jpeg"
              style={{
                aspectRatio: "500/300",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
          <div className="mx-auto space-y-4 text-center lg:space-y-6 lg:text-left  ">
            <h3 className="text-2xl text-white font-bold tracking-tight transform transition-transform hover:transform hover:scale-105 duration-300">
              Come, Beloved Co-creators
            </h3>
            <p className="text-white md:text-xl/relaxed dark:text-gray-400 transform transition-transform hover:transform hover:scale-105 duration-300">
              It is time now to heal, to manifest and to be all that the Divine
              in us calls us to be !!
            </p>
            <h3 className="text-2xl text-white font-bold tracking-tight transform transition-transform hover:transform hover:scale-105 duration-300">
              Do you hear the call?
            </h3>
            <p className="text-white md:text-xl/relaxed dark:text-gray-400 transform transition-transform hover:transform hover:scale-105 duration-300">
              Then let me know so that together we can begin this magical,
              awesome, joyful Journey to A NEW WAY OF BEING. With lots of LOVE
              and Blessings from KRISHNAVANIE AND ALL THE WONDERFUL BEINGS FROM
              THE HIGHER REALMS WHO ARE ROOTING FOR US AND GUIDING US. WE ARE
              NOT ALONE...WE ARE ALLONE!!! SEE??
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Letter;
