import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Service = () => {
  const [allServices, setServices] = useState([]);
  useEffect(() => {
    fetch("https://luxury-living.onrender.com/services")
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="my-20 text-center">
      <div className="flex flex-col items-center justify-center my-8">
        <span className="text-[#251D58]">Service</span>
        <span className="text-[#1F1632] font-bold text-2xl">
          We're an agency tailored to all <br /> clients' needs that always
          delivers
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        {allServices?.map((service) => (
          <div key={service._id} className="card w-[300px] cursor-pointer">
            <img className="w-20 mx-auto" src={service.image} alt="" />
            <div className="flex flex-col items-center gap-2 py-4">
              <span className="font-semibold text-[#1F1632] text-lg">
                {service.heading}
              </span>
              <span className="font-bold text-sm text-[#27066f]">
                ${service.price}
              </span>
              <span className="text-[#606268] text-sm">
                {service.description}
              </span>
              <Link to={`/dashboard/book/${service._id}`}>
                <button className="text-blue-900 rounded-full  w-28 hover:outline hover:outline-offset-0">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-16 btn">Explore More</button>
    </div>
  );
};

export default Service;
