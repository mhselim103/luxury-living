import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const { registerUser, authError } = useAuth();
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerUser(data.email, data.confirmPassword, data.name, navigate);
    reset();
  };
  return (
    <div className="h-[80vh] flex justify-center items-center  ">
      <div className="flex flex-col">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input"
            placeholder="Full Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-900">Please enter your name</p>
          )}
          <input
            {...register("email", { required: true })}
            type="email"
            className="input"
            placeholder="Your Email"
          />
          {errors.email && (
            <p className="text-red-900">Please enter your email</p>
          )}
          <input
            {...register("password", { required: true })}
            type="password"
            className="input"
            placeholder="Password"
            onBlur={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-900">Please enter your password</p>
          )}
          <input
            className="input"
            {...register("confirmPassword", {
              required: true,
            })}
            type="password"
            placeholder="Confirm Password"
            pattern={password}
          />
          {errors.confirmPassword && (
            <p className="text-red-900">Please re-enter your password</p>
          )}
          <p>{authError}</p>
          <button type="submit" className="btn w-full">
            Create Account
          </button>
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-800">
              Login here
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
