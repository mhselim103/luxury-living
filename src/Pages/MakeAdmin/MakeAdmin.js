import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (admin) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(admin),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          alert("Admin Made Successfully");
        }
      });
    // reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-[30vh] bg-white pt-20 flex flex-col items-center gap-4"
    >
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
