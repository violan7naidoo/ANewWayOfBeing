"use client";
import React from "react";
import Head from "next/head";
import Letter from "./Letter";
import Header from "../Components/Header";
import MissionStatement from "../Components/MissionStatement";
import CallToAction from "../Components/CallToAction";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import Hero from "../../components/component/hero";
// import Feature from "../../components/component/feature";
import Gallery from "../../components/component/gallery";

const HomeS = () => {
  return (
    <div>
      <Hero />
      <Letter />
      {/* <Header /> */}
      <MissionStatement />
      {/* <CallToAction />
      <Gallery />
      <Feature />
      <AboutUs />
      <Services /> */}
      <Footer />
    </div>
  );
};

export default HomeS;
