import React from "react";

const bookingList = [
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
  {
    img: "https://i.ibb.co/YRgKCT0/apartment-1.png",
    heading: "Show Room Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, provident!",
  },
];
const BookingList = () => {
  return (
    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
      {bookingList?.map((list) => (
        <div
          key={list.heading}
          className="booking-list bg-white p-6 rounded-lg relative"
        >
          <div className=" flex flex-col  items-start gap-1">
            <h5 className="absolute top-4 right-4">Status</h5>
            <img className="w-16" src={list.img} alt="" />
            <h1 className="text-gray-800  font-semibold text-lg ">
              {list.heading}
            </h1>
            <p>{list.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingList;
