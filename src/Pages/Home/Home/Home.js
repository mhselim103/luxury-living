import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <Hero />
      <Projects />
      <Service />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
