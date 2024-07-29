import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../Context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleMenu } = useContext(StoreContext);

  return (
    <>
      <nav className=" max-h-20 w-full flex justify-between items-center bg-[#fff8f0] ">
        <div className="items-center pl-3">
          <Link to={"/"}>
            <img
              className="transition duration-300 max-w-40 max-h-40 hover:scale-105"
              src={assets.logo}
              alt=""
            />
          </Link>
        </div>
        <div className="hidden list-none gap-10 mx-7 lg:flex lg:gap-16  lg:justify-between lg:items-center lg:list-none lg:text-xl ">
          <Link
            to={"/"}
            className="text-[#4f200d] font-semibold transition duration-300 hover:scale-110 "
          >
            Home
          </Link>
          <Link
            to={"/Aboutus"}
            className="text-[#4f200d] transition duration-300 font-semibold hover:scale-110"
          >
            About us
          </Link>
          <Link
            to={"/Contact"}
            className="text-[#4f200d] transition duration-300 font-semibold hover:scale-110"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:justify-between lg:gap-3 lg:mr-7">
          <Link to={"/Shop"}>
            <button className="bg-orange-500 transition duration-300 text-base px-5 py-1 rounded-md text-center text-white hover:scale-110 hover:opacity-90">
              Shop <i class="fa-solid fa-shop"></i>
            </button>
          </Link>
          <button className="bg-orange-500 group transition duration-400 text-base px-5 py-1 rounded-md text-white text-center hover:translate-x-3 hover:opacity-90">
            Login <i class="fa-solid fa-right-to-bracket"></i>
          </button>
        </div>
        <button
          className="lg:hidden mx-6 transition duration-300 text-lg text-[#4f200d] hover:scale-110"
          onClick={() => handleMenu()}
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div id="nav-dialog" className="hidden fixed inset-0 z-10 bg-[#fff8f0] ">
          <div>
            <div className=" flex justify-between items-center max-h-20">
              <img
                className="mx-5 max-w-40 max-h-40"
                src={assets.logo}
                alt=""
              />
              <button
                className="mx-6 text-xl text-[#4f200d] hover:scale-110"
                onClick={() => handleMenu()}
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          <hr className="h-0.5 bg-[#4f200d] mx-5" />
            <div className="list-none flex flex-col ml-10 text-lg py-5">
              <Link
                to={"/"}
                className="text-[#4f200d] font-semibold hover:bg-[#fff3e6] p-2 rounded-md transform hover:translate-x-4"
              >
                Home
              </Link>
              <Link
                to={"/Aboutus"}
                className="text-[#4f200d] font-semibold hover:bg-[#fff3e6] p-2 rounded-md transform hover:translate-x-4"
              >
                About us
              </Link>
              <Link
                to={"/Contact"}
                className="text-[#4f200d] font-semibold hover:bg-[#fff3e6] p-2 rounded-md 5 transform hover:translate-x-4"
              >
                Contact
              </Link>
            </div>
          <hr className="h-0.5 bg-[#4f200d] mx-5" />
            <div>
              <div className=" flex gap-10 justify-center pt-5 align-content-center">
                <Link to={"/Shop"}>
                  <button className="bg-orange-500 text-xl hover:scale-110 hover:opacity-90 px-6 py-1.5 rounded-md text-white transform hover:translate-x-5">
                    Shop <i class="fa-solid fa-shop"></i>
                  </button>
                </Link>
                <button className="bg-orange-500 text-xl hover:scale-110 hover:opacity-90 px-6 py-1.5 rounded-md text-white  transform hover:translate-x-5">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
