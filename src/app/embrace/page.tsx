"use client";
import Hero from "../../../src/components/component/hero";
import Footer from "../Components/Footer";
import Nav from "../Components/Navbar";

export default function Embrace() {
  return (
    <div>
      <Hero />
      <section>
        <div className="w-full grid items-center justify-center gap-4 px-4 sm:px-5 text-center md:px-6 lg:gap-10 animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
          <div className="grid items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
              Embrace A New Way Of Being
            </h2>
          </div>

          <div className="grid items-center justify-center gap-6 text-center ">
            <p className=" px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200  duration-300 transform transition-transform hover:transform hover:scale-105 ">
              In order to embrace and anchor A NEW WAY OF BEING into your daily
              life,new habits need to be formed. So lets take it one step and
              one day at a time. These new habits must be done daily for 30
              consecutive days, preferably at the same time every day for a new
              habit to be formed.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              So I will be sharing these exercises for you to do on a daily
              basis. You will need to remind youself to be fully present,
              conscious & aware during these exercises. You will also need your
              journal to record your experiences. Ok... & lets begin..... ready?
            </p>

            <div className="mx-auto flex justify-center items-center">
              <div
                className="overflow-hidden rounded-xl"
                style={{ width: "500px", height: "500px" }}
              >
                <img
                  alt="Banner Feature"
                  className="object-cover object-center h-full w-full"
                  src="/4.jpeg"
                />
              </div>
            </div>
            <div className="grid items-center justify-center gap-2">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
                Exercise 1
              </h2>
            </div>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              The first exercise in this series is to be done the moment you
              wake up in the morning. As soon as you open your eyes and feel
              your consciousness enter your body, allow yourself to be
              consciously aware of the moment of awakening. As you take an
              inbreath, invite your soul into your body.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Feel how it enters through your crown chakra and fits perfectly
              into your physical body. Feel the energy of your soul flowing into
              every cell of your body, then into your mind, and then into your
              emotions. Feel the power of your soul now anchored within your
              body. Take a few more conscious breaths in and out. Remain still
              and silent for a few more moments, then get up and go about your
              day.
            </p>
          </div>
          <br />
        </div>
      </section>

      <Footer />
    </div>
  );
}
