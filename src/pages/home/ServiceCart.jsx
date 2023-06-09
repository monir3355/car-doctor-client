import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[#FF3811]">Price: ${price}</p>
          <Link to={`checkout/${_id}`}>
            <FaArrowRight className="text-[#FF3811] font-semibold cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
