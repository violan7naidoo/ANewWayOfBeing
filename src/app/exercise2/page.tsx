"use client";
import Hero from "../../components/component/hero";
import Footer from "../Components/Footer";

export default function Exercise2() {
  return (
    <div>
      <Hero />
      <section>
        <div className="w-full grid items-center justify-center gap-4 px-4 sm:px-5 text-center md:px-6 lg:gap-10 animate-fadeIn mt-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400">
          <div className="grid items-center justify-center gap-2">
            <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl mt-5 hover:text-gray-200 duration-300  transform transition-transform hover:transform hover:scale-105 ">
              Exercise 2 - Geting into your HeartSpace
            </h2>
          </div>

          <div className="grid items-center justify-center gap-6 text-center ">
            <p className=" px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200  duration-300 transform transition-transform hover:transform hover:scale-105 ">
              In this exercise you will consciously move from your headspace
              into your heartspace. Seat yourself in a comfortble position. Take
              a few deep breaths in and out. Now observe your thoughts as they
              flow from your headspace.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Take a deep breathe and very slowly gently bring your awareness to
              your heartspace. Focus now on your heart. Feel how it beats in
              your chest. Try to go deeper and hear its beats. Breathe
              consciously and allow your awareness to become the beats. Now all
              you are is the pulsating beat of your heart.
            </p>

            <div className="mx-auto flex justify-center items-center">
              <div
                className="overflow-hidden rounded-xl"
                style={{ width: "430px", height: "500px" }}
              >
                <img
                  alt="Banner Feature"
                  className="object-cover object-center h-full w-full"
                  src="/3a.jpeg"
                />
              </div>
            </div>
            <div className="grid items-center justify-center gap-2"></div>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Stay there in your heartbeat and very gently extend your awareness
              further and further out into space. Feel the expansion of your
              awareness grow until you feel the hearteat, the pulsating beat of
              the Universe.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Your heart is now beating in unison with the heartbeat of the
              Universe. Remain in this Divine Space for as long as you wish.
              Then very very gently bring your awareness back to your heart,
              your body and the room that you are in. Allow the divine energy
              that you brought back with you, to flood your entire being.
            </p>
            <p className="px-10 mx-auto max-w-[900px] text-white md:text-lg lg:text-xl dark:text-gray-400 hover:text-gray-200 transform transition-transform hover:transform hover:scale-105 duration-300">
              Record your experience in your journal and then go about your day
              knowing now that your heartbeatand that of the Universe are ONE.
            </p>
          </div>
          <br />
        </div>
      </section>

      <Footer />
    </div>
  );
}
