import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const BookingList = () => {
  const { user } = useAuth();
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    fetch(`https://fast-coast-69202.herokuapp.com/myorders/${user.email}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setOrderList(data);
      });
  }, []);
  return (
    <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
      {orderList?.map((list) => (
        <div
          key={list.heading}
          className="booking-list bg-white p-6 rounded-lg relative"
        >
          <div className=" flex flex-col  items-start gap-1">
            <h5 className="absolute top-4 right-4">Status</h5>
            <img className="w-16" src={list.image} alt="" />
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
