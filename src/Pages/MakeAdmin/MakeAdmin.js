import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-[30vh] bg-white pt-20">
      <input
        {...register("email", { required: true })}
        type="email"
        className="outline  rounded-md outline-1 input w-[50%] mx-auto"
        placeholder="Email"
      />
      <button className="btn" type="submit">
        Make Admin
      </button>
    </form>
  );
};

export default MakeAdmin;
