import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const { signInUsingGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const googleSignIn = (e) => {
    e.preventDefault();
    signInUsingGoogle(location, navigate);
  };
  return (
    <div className="h-[80vh] flex justify-center items-center ">
      <div className="flex justify-center flex-col items-center gap-2">
        <div className="text-center">
          <h1 className="my-8 font-bold">Login With</h1>
          <button
            className="flex justify-around gap-1 items-center hover:outline hover:outline-1
             shadow-lg   rounded-xl w-64 text-sm my-2  border"
            onClick={googleSignIn}
          >
            {" "}
            <img
              className="w-5"
              src="https://i.ibb.co/K6q2vr6/google.png"
              alt=""
            />{" "}
            <span>Continue With Google</span>
          </button>
        </div>
        <p className="text-xs">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-800">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
