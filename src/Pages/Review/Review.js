import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <input
          {...register("name", { required: true })}
          type="text"
          className="block w-full sm:w-[34%]"
          placeholder="Name"
        />
        <input
          {...register("companyName", { required: true })}
          type="text"
          className="block w-full sm:w-[34%]"
          placeholder="Company Name / Designation"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="block w-full sm:w-[34%]"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
