"use client";
import Hero from "../../../src/components/component/hero";
import Footer from "../Components/Footer";

export default function Embrace() {
  return (
    <div>
      <Hero />
      <section>
        <div className="w-full grid items-center justify-center gap-4 px-4 sm:px-5 text-center md:px-6 lg:gap-10 animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
          <div className="grid items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
              Embrace A New Way of Being
            </h2>
          </div>

          <div className="grid items-center justify-center gap-6 text-center ">
            <p className=" px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200  duration-300 transform transition-transform hover:transform hover:scale-105 ">
              When you embrace A New Way of Being you will be embracing a new
              way of relating to the people you encounter in your journey
              through life. Here&apos;s the interesting thing, the thread that
              runs through the fabricof the universe, is thta of LOVE, knowing
              and understanding this, you must also realize You are Love in
              action here on Earth.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Which bringsme to the point of the language of Love. Each person
              has their own unique Love Language. It is all about what makes you
              feel safe, loved, celebrated and nurtured. Each person has a
              different way of experiencing Love in their lives. So when you are
              relating to people, it is important to express how you wish to
              feel safe, nurtured, important and special.
            </p>

            <div className="mx-auto flex justify-center items-center">
              <div
                className="overflow-hidden rounded-xl"
                style={{ width: "430px", height: "500px" }}
              >
                <img
                  alt="Banner Feature"
                  className="object-cover object-center h-full w-full"
                  src="/6.jpeg"
                />
              </div>
            </div>
            <div className="grid items-center justify-center gap-2">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 "></h2>
            </div>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              When you choose to embrace a new way of being, this will be one of
              the most important conversations you will want to have. Because
              then you will be relative with other with awareness. You want to
              experience Heaven on Earth, right? So imagine how awesome it will
              be when each person honors the other&apos;s existence by simply
              loving them in ways that they wish to be loved.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              It is all about reconizing the Divine in each in each of us and
              living that Truth.
            </p>
          </div>
          <br />
        </div>
      </section>

      <Footer />
    </div>
  );
}
