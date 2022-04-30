import React from "react";
import "./Footer.css";
import { TiLocation } from "react-icons/ti";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-12 sm:px-36 py-12 bg-[#251D58] text-white grid grid-cols-1 md:grid-cols-3 text-center gap-4">
      <div className="flex text-left gap-2 items-center ">
        <TiLocation size={15} />
        <span className="font-light text-sm">
          H#000 (0th Floor), Road #00, <br /> New DOHS, Mohakhali, Dhaka,
          Bangladesh
        </span>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="flex flex-col items-start">
          <h1 className="mb-2">Company</h1>
          <p>About</p>
          <p>Projects</p>
          <p>Our Team</p>
          <p>Terms Condition</p>
          <p>Listing Submit</p>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="mb-2">Quick Links</h1>
          <p>Rental</p>
          <p>Scale</p>
          <p>Contact</p>
          <p>Our Blog</p>
          <p>News</p>
        </div>
      </div>
      <div className="text-left flex flex-col gap-4">
        <h1>About Us</h1>
        <p className="text-[#bfc0c3] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          voluptate Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit, voluptate.
        </p>
        <div className="flex gap-4 social-icons">
          <FaFacebookF /> <FaInstagram /> <FaLinkedin /> <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
