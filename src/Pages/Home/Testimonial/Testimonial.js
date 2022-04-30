import React from "react";
import "./Testimonial.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="px-8 sm:px-36 bg-gray-100  py-12">
      <h1 className="text-[#1F1632] font-bold text-2xl text-center">
        Testimonials
      </h1>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        // navigation
        pagination={{ clickable: true }}
        className="my-8"
      >
        <SwiperSlide className="my-12">
          <div className="shadow-md rounded-md bg-slate-50 p-4 ]">
            <div className="flex flex-row gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/3B30jqG/Ellipse-90.png"
                alt=""
              />
              <div>
                <p className="text-[#1F1632] text-sm font-bold">Nash Patrik</p>
                <p className="text-sm text-[#27066f]">CEO, Manpol</p>
              </div>
            </div>
            <p className="text-[#606268] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-12">
          <div className="shadow-md rounded-md bg-slate-50 p-4 ">
            <div className="flex flex-row gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/KqzbcLT/Ellipse-91.png"
                alt=""
              />
              <div>
                <p className="text-[#1F1632] text-sm font-bold">Nash Patrik</p>
                <p className="text-sm text-[#27066f]">CEO, Manpol</p>
              </div>
            </div>
            <p className="text-[#606268] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-12">
          <div className="shadow-md rounded-md bg-slate-50 p-4">
            <div className="flex flex-row gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/sVTyS8B/Ellipse-92.png"
                alt=""
              />
              <div>
                <p className="text-[#1F1632] text-sm font-bold">Nash Patrik</p>
                <p className="text-sm text-[#27066f]">CEO, Manpol</p>
              </div>
            </div>
            <p className="text-[#606268] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="my-12">
          <div className="shadow-md rounded-md bg-slate-50 p-4 ">
            <div className="flex flex-row gap-3 items-center">
              <img
                className="w-12"
                src="https://i.ibb.co/3B30jqG/Ellipse-90.png"
                alt=""
              />
              <div>
                <p className="text-[#1F1632] text-sm font-bold">Nash Patrik</p>
                <p className="text-sm text-[#27066f]">CEO, Manpol</p>
              </div>
            </div>
            <p className="text-[#606268] text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              commodo ipsum duis laoreet maecenas. Feugiat
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
