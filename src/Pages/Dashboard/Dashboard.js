import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineShop } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Icon/logo.png";
const Dashboard = () => {
  const { user, admin } = useAuth();
  const [heading, setHeading] = useState("Dashboard");
  return (
    <div className="dashboard flex bg-[#F4F7FC] relative top-0 bottom-0">
      <div className="h-[100vh] w-52 sticky top-0 left-0 bg-white">
        <div className="ml-4 mt-4">
          <div className="mb-12">
            <img className="w-[50%]" src={logo} alt="" />
          </div>

          {admin ? (
            <div className="flex flex-col gap-2">
              <Link
                to="orders"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("Orders")}
              >
                {" "}
                <AiOutlineShoppingCart /> Orders List
              </Link>
              <Link
                to="addservice"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("Add Service")}
              >
                {" "}
                <AiOutlineShop /> Add Service
              </Link>
              <Link
                to="admin"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("Make Admin")}
              >
                {" "}
                <MdRateReview /> Make Admin
              </Link>
              <Link
                to="manageservice"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("Manage Services")}
              >
                {" "}
                <MdRateReview /> Manage Services
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="myorders"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("My Orders")}
              >
                {" "}
                <AiOutlineShop /> My Orders
              </Link>
              <Link
                to="review"
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setHeading("Review")}
              >
                {" "}
                <MdRateReview /> Review
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-white h-[8vh] sticky top-0 left-0">
          <div className="flex justify-between mx-8 pt-4">
            <h5>{heading}</h5>
            <h5>{user?.displayName}</h5>
          </div>
        </div>
        <div className="text-gray-800 ">
          <div className="m-8">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
