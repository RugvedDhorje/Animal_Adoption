import React from "react";

const DisplayCards = (props) => {
  return (
    <div>
      <div className="h-96 w-72 rounded-sm bg-white shadow-md  transition duration-500 hover:scale-105 hover:shadow-xl">
        <img className="h-44 w-72 rounded-t-sm" src={props.image} alt="" />
        <div className="px-3">
          <h3 className="font-semibold pt-2 cursor-pointer text-xl">
            {props.name}
          </h3>
          <div className="flex gap-2 text-lg">
            <p>{props.age} ,</p>
            <p>{props.gender}</p>
          </div>
          <p className="text-lg pb-2">vaccinated : {props.vaccinated}</p>
          <hr className="bg-[#613625] h-0.5"/>
          <div className="py-2 flex gap-2">
            <span className="bg-[#613625] content-center text-white h-8 text-center rounded-full w-8">
              <i class="fa-regular fa-user"></i>
            </span>
            <p className="text-lg cursor-pointer">Contact Owner</p>
          </div>
          <hr className="bg-[#613625] h-0.5"/>
          <div className="flex justify-between mx-3 pt-3">
            <span className="bg-blue-600 content-center h-8 text-center text-white rounded-full w-8">
              <i class="fa-brands fa-facebook"></i>
            </span>
            <span className="bg-purple-700 content-center h-8 text-center text-white rounded-full w-8">
              <i class="fa-brands fa-instagram"></i>
            </span>
            <span className="bg-black content-center h-8 text-center text-white rounded-full w-8">
              <i class="fa-brands fa-x-twitter"></i>
            </span>
            <span className="bg-green-600 content-center h-8 text-center text-white rounded-full w-8">
              <i class="fa-brands fa-whatsapp"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayCards;
