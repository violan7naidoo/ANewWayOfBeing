"use client";
import Hero from "../../../src/components/component/hero";
import Footer from "../Components/Footer";
export default function AboutUs() {
  return (
    <div>
      <Hero />{" "}
      <section>
        <div className="w-full grid items-center justify-center gap-4 px-4 sm:px-5 text-center md:px-6 lg:gap-10 animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
          <div className="grid items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
              About Us
            </h2>
          </div>

          <div className="grid items-center justify-center gap-6 text-center ">
            <p className=" px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200  duration-300 transform transition-transform hover:transform hover:scale-105 ">
              This project A NEW WAY OF BEING is all about a dream coming true.
              All my life I have been a devotee of LIFE. By this I mean, I
              worship LIFE.... I worship at the Altar of LIFE. Because LIFE is
              the greatest gift that the Almighty Creator has bestowed on all of
              us. So through this platform, I invite you to come join me in
              worshipping at the Altar of Life. Come and see how glorious it
              really is.
            </p>
            <div className="grid items-center justify-center gap-2">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
                Who Am I?
              </h2>
            </div>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              I am KRISHNAVANIE POGBALAN from DURBAN SOUTH AFRICA.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              I am a multidimensional being - and so are you! - here on earth to
              remind you of who you really are. I am eagerly looking forward to
              connect with you so that together we can co-create heaven on
              Earth. It`&apos;s about time, don`&apos;t you think?
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
                src="/9.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
