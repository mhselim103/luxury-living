import React from "react";
import { useForm } from "react-hook-form";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (review) => {
    fetch("https://luxury-living.onrender.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Ordered Successfully");
        }
      });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <input
          {...register("name", { required: true })}
          type="text"
          className="block w-full sm:w-[34%] p-2"
          placeholder="Name"
        />
        <input
          {...register("companyName", { required: true })}
          type="text"
          className="block w-full sm:w-[34%] p-2"
          placeholder="Company Name / Designation"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="block w-full sm:w-[34%] p-2"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
