import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      id="hero"
      className="max-h-screen relative bg-[#fff8f0] mx-2 rounded-md"
    >
      <div className="lg:flex justify-center px-3 lg:pt-2 content-center ">
        <img
          className="rounded-md w-screen"
          src={assets.cover_photo_5}
          alt=""
        />
        <div
          className="flex justify-center items-center absolute ml-44 lg:bottom-56 bottom-48 rounded-md 
        shadow-lg text-center lg:left-56 bg-slate-50 hover:bg-[#613625] hover:text-white"
        >
          <h1 className="lg:p-8 p-5 lg:text-6xl text-[#4f200d] hover:text-white font-bold text-2xl">
            Adopt , Don't Shop...
          </h1>
        </div>
      </div>
      <div>
        <h1 className="text-center font-bold text-2xl mt-8 mb-4 text-[#4f200d] lg:text-5xl lg:mt-10 lg:mb-2">
          Re-Home and Adopt a Pet in India
        </h1>
        <p className="text-center text-[#4f200d] text-md lg:text-2xl lg:mt-5">
          Looking for endless love and pawsibilities? Adopt a rescue pet and
          make a difference!
        </p>
        <div className="flex justify-center mt-3 content-center pb-5">
          <Link to={"/DisplayPets"}>
            <button
              className="bg-orange-500 px-6 transition duration-400 py-2 font-semibold lg:text-xl lg:px-12
           rounded-lg text-white lg:mt-6 lg:mb-10 mt-3 hover:opacity-90 hover:scale-105"
            >
              Adopt a Pet
              <span className="pl-2">
                <i class="fa-solid fa-paw"></i>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
