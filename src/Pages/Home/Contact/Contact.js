import React, { useRef } from "react";
import "./Contact.css";
import { SiMinutemailer } from "react-icons/si";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const sendEmail = (data) => {
    console.log(data);
    emailjs
      .sendForm(
        "service_7u97c2s",
        "template_uveukwr",
        form.current,
        "tLB-2KbWnCjCct-Bu"
      )
      .then(
        (result) => {
          alert("Thanks For Reaching Me");
        },
        (error) => {}
      );
    reset();
  };
  return (
    <div className="contact-container" id="contact">
      <div className="">
        <div className="flex flex-col justify-center items-center my-6 text-center">
          <span className="text-[#251D58]">Contact</span>
          <span className="text-[#1F1632] font-bold text-2xl">
            Let us handle <br />
            your project, professionally.
          </span>
        </div>
        <div className="">
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <input
              type="text"
              {...register("name")}
              className="user"
              placeholder="Name"
            />
            <input
              type="email"
              {...register("email")}
              className="user"
              placeholder="Email"
            />
            <textarea
              {...register("message")}
              className="user"
              placeholder="Message"
            />
            <button className="btn flex items-center gap-3">
              <span>Send</span> <SiMinutemailer />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
