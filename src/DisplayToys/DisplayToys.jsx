import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import ToysCard from "./ToysCard";

const DisplayToys = () => {
  const { toy_list } = useContext(StoreContext);
  return (
    <>
      <div id="Toys-display" className="w-full m-1 bg-[#fff8f0] pb-10">
        <h1 className="text-5xl text-center py-10 font-bold text-[#4f200d]">Pets Toys</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {toy_list.map((item, index) => {
            return (
              <ToysCard
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
              ></ToysCard>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayToys;
