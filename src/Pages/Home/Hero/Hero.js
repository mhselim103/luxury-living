import React from "react";

const Hero = () => {
  return (
    <div className="bg-[#F6F6F6] px-8 sm:px-36 grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      <div className="sm:mt-36">
        <span className="text-[#1F1632] font-bold text-2xl sm:text-6xl">
          We Build <br /> Your Dream
        </span>
        <p className="text-[#606268] text-sm sm:text-base font-light my-4">
          Online Easte Agency, the mordern way to sell your own home, <br /> You
          can use Griffin Residential to market your property
        </p>
        <button className="btn">Booking</button>
      </div>
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/MSqKvY7/hero-section.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
