import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (service) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          alert("Service Added Successfully");
        }
      });
    reset();
    // reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form ">
        <input
          {...register("image", { required: true })}
          type="text"
          className="block w-full sm:w-[34%] p-2"
          placeholder="Image Link"
        />
        <input
          {...register("service", { required: true })}
          type="text"
          className="block w-full sm:w-[34%] p-2"
          placeholder="Service Name"
        />
        <input
          {...register("price", { required: true })}
          type="text"
          className="block w-full sm:w-[34%] p-2"
          placeholder="Price"
        />
        <textarea
          {...register("description", { required: true })}
          placeholder="Description"
          className="block w-full sm:w-[34%] p-2"
        ></textarea>
        <button className="btn" type="submit">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
