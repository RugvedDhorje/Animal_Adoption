import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import DisplayFoodCards from "./DisplayFoodCards";

const DisplayPetFood = () => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <div>
        <div id="PetFood-display" className="w-full m-1 pb-10 bg-[#fff8f0]">
          <h1 className=" text-5xl text-center py-10 font-bold text-[#4f200d]">
            Pets Food
          </h1>
          <div className="flex flex-wrap gap-5 justify-center mb-5">
            {food_list.map((food, index) => {
              return (
                <DisplayFoodCards
                  key={index}
                  id={food._id}
                  name={food.name}
                  image={food.image}
                  price={food.price}
                  quantity={food.quantity}
                  rating={food.rating}
                ></DisplayFoodCards>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayPetFood;
