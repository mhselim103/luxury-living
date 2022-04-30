import React from "react";

const Projects = () => {
  return (
    <div className="text-center my-12">
      <div className="flex flex-col justify-center items-center my-6">
        <span className="text-[#251D58]">Projects</span>
        <span className="text-[#1F1632] font-bold text-2xl">
          Discover the latest Interior Design <br /> available today
        </span>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="card w-[300px] h-[350px] ">
          <img
            className="w-full h-[280px] object-cover rounded-md"
            src="https://i.ibb.co/j3RKY04/card-image.png"
            alt=""
          />
          <div className="py-4 flex flex-col">
            <span className="font-semibold text-[#1F1632] text-lg">
              Villa on Washington Avenue
            </span>
            <span className="font-medium text-sm text-gray-500">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>
        <div className="card w-[300px] h-[350px] ">
          <img
            className="w-full h-[280px] object-cover rounded-md"
            src="https://i.ibb.co/Zm9wLST/card-image1.png"
            alt=""
          />
          <div className="py-4 flex flex-col">
            <span className="font-semibold text-[#1F1632] text-lg">
              Luxury villa in Rego Park
            </span>
            <span className="font-medium text-sm text-gray-500">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>
        <div className="card w-[300px] h-[350px] ">
          <img
            className="w-full h-[280px] object-cover rounded-md"
            src="https://i.ibb.co/M6rgb8W/card-image2.png"
            alt=""
          />
          <div className="py-4 flex flex-col">
            <span className="font-semibold text-[#1F1632] text-lg">
              Gorgeous House
            </span>
            <span className="font-medium text-sm text-gray-500">
              Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
