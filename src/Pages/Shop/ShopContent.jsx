import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const ShopContent = () => {
  return (
    <div>
      <div className="w-full h-fit flex justify-center bg-yellow-400">
        <img className="py-5 px-2" src={assets.Shop_Cover} alt="" />
      </div>
      <h2 className="text-center text-3xl pt-4 lg:pt-6 lg:text-5xl font-bold text-[#4f200d]">
        Indulge your Best Friend's taste Buds Today{" "}
      </h2>
      <div className="lg:flex lg:justify-between mt-14 mx-36">
        <div className="flex gap-6 justify-center items-center mb-12">
          <span className="text-5xl">
            <i class="fa-solid fa-truck-fast"></i>
          </span>
          <div>
            <p className="font-semibold text-xl">Free Shipping</p>
            <p className="text-lg">Across India</p>
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center mb-12">
          <span className="text-5xl">
            <i class="fa-regular fa-heart"></i>
          </span>
          <div>
            <p className="font-semibold text-xl">Made In India Products</p>
            <p className="text-lg">#Vocalforlocal</p>
          </div>
        </div>
        <div className="flex gap-6 justify-center items-center mb-12">
          <span className="text-5xl">
            <i class="fa-solid fa-gift"></i>
          </span>
          <div>
            <p className="font-semibold text-xl">Priority Delivery</p>
            <p className="text-lg">Same Day Processing</p>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between lg:mx-52">
        <div className="flex justify-center my-5">
          <img
            className="h-[250px] w-[500px] rounded-sm relative"
            src={assets.pet_cover}
            alt=""
          />
          <div className="absolute mr-80 mt-2">
            <Link to={"/DisplayPetFood"}>
              <button className="bg-orange-600 px-4 py-1 rounded-md text-white hover:bg-white hover:text-orange-700">
                Pet Food
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <img
            className="h-[250px] w-[500px] rounded-sm relative"
            src={assets.pet_cover_2}
            alt=""
          />
          <div className="absolute mr-72 mt-2">
            <Link to={"/DisplayToys"}>
              <button className="bg-orange-600 px-4 py-1 rounded-md text-white hover:bg-white hover:text-orange-700">
                Eco-friendly Pet Toys
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopContent;
