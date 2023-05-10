import React from "react";
import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const AboutUs = () => {
  return (
    <div className="card md:card-side bg-base-100 shadow-xl py-6 my-20">
      <figure className="md:w-1/2 relative">
        <img className="h-5/6 w-5/6" src={person} alt="Album" />
        <img
          className="absolute h-1/2 w-1/2 -bottom-5 -right-5 border-8 rounded-lg border-white"
          src={parts}
          alt="Album"
        />
      </figure>
      <div className="card-body md:w-1/2 space-y-3">
        <h5 className="card-title text-lg text-[#FF3811]">About Us</h5>
        <h2 className="card-title text-3xl">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="card-actions justify-start">
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
