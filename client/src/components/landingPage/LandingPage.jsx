import React from "react";
import LandingNav from "./LandingNav";
import Hero from "./Hero";
import Features from "./Features";
import GetStarted from "./GetStarted";
import Faqs from "./Faqs";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <LandingNav />
      <Hero />
      <Features />
      <GetStarted />
      <Faqs />
      <Footer />
    </>
  );
};

export default LandingPage;
