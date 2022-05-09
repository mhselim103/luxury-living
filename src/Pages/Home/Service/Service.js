import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div className="text-center my-20">
      <div className="flex flex-col justify-center items-center my-8">
        <span className="text-[#251D58]">Service</span>
        <span className="text-[#1F1632] font-bold text-2xl">
          We're an agency tailored to all <br /> clients' needs that always
          delivers
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {services?.map((service) => (
          <div className="card w-[300px] cursor-pointer">
            <img className="w-20 mx-auto" src={service.image} alt="" />
            <div className="py-4 flex flex-col items-center gap-2">
              <span className="font-semibold text-[#1F1632] text-lg">
                {service.heading}
              </span>
              <span className="font-bold text-sm text-[#27066f]">
                ${service.price}
              </span>
              <span className="text-[#606268] text-sm">
                {service.description}
              </span>
              <Link to="/dashboard/book">
                <button className=" text-blue-900  w-28 rounded-full hover:outline hover:outline-offset-0">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="btn mt-16">Explore More</button>
    </div>
  );
};

export default Service;
