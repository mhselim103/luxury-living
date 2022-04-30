import React from "react";

/* https://i.ibb.co/mbL3HbT/affordable-1.png
https://i.ibb.co/YRgKCT0/apartment-1.png
https://i.ibb.co/RCxkGdv/cart.png
https://i.ibb.co/gTsQs5g/cloud-upload-outline-1.png
https://i.ibb.co/7R4YLYb/credit-card-1.png
https://i.ibb.co/hX4cnRG/fb.png
https://i.ibb.co/K6q2vr6/google.png
https://i.ibb.co/BGYmB2k/Group-1360.png
https://i.ibb.co/jzNGV7b/Group-33040.png
https://i.ibb.co/tznmgSs/insta.png
https://i.ibb.co/Y4grdYc/lessee-1.png
https://i.ibb.co/310fGGX/linkedin.png
https://i.ibb.co/GJHN2yq/location.png
https://i.ibb.co/0VnjC8g/logo.png
https://i.ibb.co/MZ3pDhB/map-pin-2-fill.png
https://i.ibb.co/xz36s3G/message.png
https://i.ibb.co/ZK0y1H7/paypal.png
https://i.ibb.co/djvhfRN/youtube.png */

const Service = () => {
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
        <div className="card w-[300px] cursor-pointer">
          <img
            className="w-20 mx-auto"
            src="https://i.ibb.co/YRgKCT0/apartment-1.png"
            alt=""
          />
          <div className="py-4 flex flex-col text-center">
            <span className="font-semibold text-[#1F1632] text-lg">
              Office Interior Design
            </span>
            <span className="font-bold text-sm text-[#27066f]">$299</span>
            <span className="text-[#606268] text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </div>
        </div>
        <div className="card w-[300px] cursor-pointer">
          <img
            className="w-20 mx-auto"
            src="https://i.ibb.co/mbL3HbT/affordable-1.png"
            alt=""
          />
          <div className="py-4 flex flex-col text-center">
            <span className="font-semibold text-[#1F1632] text-lg">
              Showroom Design
            </span>
            <span className="font-bold text-sm text-[#27066f]">$399</span>
            <span className="text-[#606268] text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </div>
        </div>
        <div className="card w-[300px] cursor-pointer">
          <img
            className="w-20 mx-auto"
            src="https://i.ibb.co/Y4grdYc/lessee-1.png"
            alt=""
          />
          <div className="py-4 flex flex-col text-center">
            <span className="font-semibold text-[#1F1632] text-lg">
              Residential/Home
            </span>
            <span className="font-bold text-sm text-[#27066f]">$499</span>
            <span className="text-[#606268] text-sm">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </span>
          </div>
        </div>
      </div>
      <button className="btn mt-16">Explore More</button>
    </div>
  );
};

export default Service;
