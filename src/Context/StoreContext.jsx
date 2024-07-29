import { createContext, useEffect, useState } from "react";
import { pets_list, food_list, toy_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const handleMenu = () => {
    document.getElementById("nav-dialog").classList.toggle("hidden");
  };

  const handleInfo1 = () => {
    document.getElementById("info-1").classList.toggle("hidden");
    document.getElementById("plus1").classList.toggle("hidden");
    document.getElementById("minus1").classList.toggle("hidden");
  };
  const handleInfo2 = () => {
    document.getElementById("info-2").classList.toggle("hidden");
    document.getElementById("plus2").classList.toggle("hidden");
    document.getElementById("minus2").classList.toggle("hidden");
  };
  const handleInfo3 = () => {
    document.getElementById("info-3").classList.toggle("hidden");
    document.getElementById("plus3").classList.toggle("hidden");
    document.getElementById("minus3").classList.toggle("hidden");
  };
  const handleInfo4 = () => {
    document.getElementById("info-4").classList.toggle("hidden");
    document.getElementById("plus4").classList.toggle("hidden");
    document.getElementById("minus4").classList.toggle("hidden");
  };

  const contextValue = {
    pets_list,
    food_list,
    toy_list,
    handleMenu,
    handleInfo1,
    handleInfo2,
    handleInfo3,
    handleInfo4,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
