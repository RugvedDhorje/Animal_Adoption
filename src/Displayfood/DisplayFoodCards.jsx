import React from "react";
import { assets } from "../assets/assets";

const DisplayFoodCards = (props) => {
  return (
    <div>
      <div className="h-[400px] w-80 rounded-t-full bg-white shadow-md relative transition duration-500 hover:scale-105 hover:shadow-xl">
        <img
          className="h-48 w-72 object-fill rounded-t-3xl"
          src={props.image}
          alt=""
        />
        <div className="px-3">
          <h3 className="font-semibold pt-3 cursor-pointer text-xl">
            {props.name}
          </h3>
          <div className="flex gap-2">
            <h3 className="text-2xl font-semibold pt-2 cursor-pointer">
              ₹ {props.price}
            </h3>
            <p className="pt-4">{props.quantity}</p>
          </div>
          <div className="flex gap-2 py-2">
            <p className="text-lg">{props.rating}</p>
            <img src={assets.rating} alt="" />
          </div>
          <div className="absolute bottom-0 right-24 pb-3">
            <button className="bg-orange-500 text-white px-6 py-2 text-lg rounded-md hover:opacity-90">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFoodCards;
