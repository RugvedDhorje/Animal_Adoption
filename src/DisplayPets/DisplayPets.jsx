import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import DisplayCards from "./DisplayCards";

const DisplayPets = () => {
  const { pets_list } = useContext(StoreContext);
  return (
    <>
      <div id="Pets-display" className="w-full m-1 bg-[#fff8f0]">
        <h1 className="text-5xl text-center py-10 font-bold text-[#4f200d]">
          Pets Available For Adoption
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {pets_list.map((item, index) => {
            return (
              <DisplayCards
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                category={item.category}
                description={item.description}
                age={item.age}
                gender={item.gender}
                vaccinated={item.vaccinated}
              ></DisplayCards>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayPets;
