import React from "react";
import { assets } from "../assets/assets";

const ToysCard = (props) => {
  return (
    <div>
      <div className="h-[400px] w-80 bg-white shadow-md  transition duration-500 hover:scale-105 hover:shadow-xl relative">
      <div className="flex justify-center">
      <img
          className="h-48 w-72 object-contain rounded-full pt-2 "
          src={props.image}
          alt=""
        />
      </div>
        <div className="px-3">
          <h3 className="font-semibold pt-3 cursor-pointer text-xl">
            {props.name}
          </h3>
          <h3 className="text-2xl font-semibold pt-2 cursor-pointer">
            ₹ {props.price}
          </h3>
          <img className="py-2" src={assets.rating} alt="" />
          <div className=" bottom-0 pb-3 right-24 absolute">
            <button className="bg-orange-500 text-white px-6 py-2 text-lg rounded-md hover:opacity-90">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
