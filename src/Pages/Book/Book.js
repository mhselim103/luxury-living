import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
const Book = () => {
  const [service, setService] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://luxury-living.onrender.com/services/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  const onSubmit = (book) => {
    console.log(book);
    fetch("https://luxury-living.onrender.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Ordered Successfully");
          reset();
          navigate("/");
        }
      });
  };
  const [selectedValue, setSelectedValue] = useState("creditCard");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className=" w-[50%] mx-auto">
      {service ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-start"
        >
          {user && user.displayName && (
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={user.displayName}
              className="block w-full p-2"
              placeholder="Name"
              // disabled
            />
          )}
          {user && user.email && (
            <input
              {...register("email", { required: true })}
              type="email"
              value={user.email}
              className="block w-full p-2"
              placeholder="Email Id"
              // disabled
            />
          )}
          {service && service.heading && (
            <input
              {...register("heading", { required: true })}
              type="text"
              value={service.heading}
              className="block w-full  p-2"
              placeholder="Service Name"
              // disabled
            />
          )}
          <input
            {...register("id", { required: true })}
            type="text"
            className="block w-full p-2"
            placeholder="Service Id"
            value={id}
            // disabled
          />
          {service && service.image && (
            <input
              {...register("image", { required: true })}
              type="text"
              className="block w-full p-2"
              placeholder="Image"
              value={service.image}
              // disabled
            />
          )}
          {service && service.price && (
            <input
              {...register("price", { required: true })}
              type="text"
              className="block w-full p-2"
              placeholder="Price"
              value={service.price}
              // disabled
            />
          )}

          <p className="text-[#899694]">Pay With</p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <input
                {...register("cardType")}
                type="radio"
                checked={selectedValue === "creditCard"}
                defaultValue="creditCard"
                onChange={handleChange}
                className="scale-150 cursor-pointer"
              />
              <img
                className="w-6"
                src="https://i.ibb.co/7R4YLYb/credit-card-1.png"
                alt=""
              />
              <p>Credit Card</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                {...register("cardType")}
                type="radio"
                checked={selectedValue === "paypal"}
                defaultValue="paypal"
                onChange={handleChange}
                className="scale-150 cursor-pointer"
              />
              <img
                className="w-6"
                src="https://i.ibb.co/ZK0y1H7/paypal.png"
                alt=""
              />
              <p>Paypal</p>
            </div>
          </div>

          {selectedValue === "creditCard" && (
            <div className="w-full flex flex-col gap-2">
              <input
                {...register("cardNumber", { required: true })}
                type="text"
                className="block w-full p-2"
                placeholder="Card Number"
              />
              <div className="w-full flex gap-5">
                <input
                  {...register("mm/yc", { required: true })}
                  type="text"
                  className="block w-full sm:w-[50%] p-2"
                  placeholder="MM/YC"
                />
                <input
                  {...register("cvc", { required: true })}
                  type="text"
                  className="block w-full sm:w-[50%] p-2"
                  placeholder="CVC"
                />
              </div>
            </div>
          )}

          <button className="btn w-[50%] mx-auto" type="submit">
            Pay Now
          </button>
        </form>
      ) : (
        "Loading"
      )}
    </div>
  );
};

export default Book;
