import React from "react";
import { assets } from "../assets/assets";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const About = () => {
  return (
    <>
    <div className="max-w-screen bg-[#fff8f0] mx-2 rounded-md">
      <div className="flex justify-center">
        <h1 className="font-bold lg:pt-9 lg:text-5xl pt-7 px-3 text-center text-[#4f200d] text-3xl">
          Your Pet Adoption Journey With GetABuddy
        </h1>
      </div>
      <div className="lg:flex justify-center pt-16">
        <div className="flex justify-center h-auto px-10 lg:w-[50%]">
          <img
            className="transition duration-700 hover:scale-125"
            src={assets.adopt_board}
            alt=""
          />
        </div>
        <div className="lg:pr-12">
          <h3 className="pt-3 font-bold text-2xl text-center pb-2 lg:text-start lg:pl-5 text-[#471d0c] lg:text-3xl">
            Search Pet
          </h3>
          <p className="px-5 text-md pb-3 font-medium lg:text-lg lg:pb-3 text-[#523123]">
            Adopt a dog or cat who's right for you. Simply find according to
            your need.
          </p>
          <h3 className="pt-3 font-bold text-2xl text-center pb-2 lg:text-start lg:pl-5  lg:text-3xl text-[#471d0c]">
            Connect
          </h3>
          <p className="px-5 text-md pb-3 font-medium lg:text-lg lg:pb-3 text-[#523123]">
            Once you find the pet,go to contact info for their pet parents or
            rescue. contact them to learn more about how to meet and adopt the
            pet
          </p>
          <h3 className="pt-3 font-bold text-2xl text-center pb-2 lg:text-start lg:pl-5 lg:text-3xl text-[#471d0c]">
            AdoptLove
          </h3>
          <p className="px-5 text-md pb-3 font-medium lg:text-lg lg:pb-3 text-[#523123]">
            The rescue or pet parents will walk you through their adoption
            process.Prepare your home for the arrival of your fur baby to help
            them adjust to their new family.
          </p>
          <h3 className="pt-3 font-bold text-2xl text-center pb-2 lg:text-start lg:pl-5 lg:text-3xl text-[#471d0c]">
            Free Vet Consultation
          </h3>
          <p className="px-5 text-md pb-3 font-medium lg:text-lg lg:pb-3 text-[#523123]">
            GetABuddy will help your pet to settle down in its new home, once
            you complete the Adoption journey reach out to us for free vet
            consultation.
          </p>
        </div>
      </div>
      <div className="bg-[#fff8f0]">
        <div className="mb-5">
          <h1 className="text-center text-[#4f200d] pt-10 font-bold lg:text-5xl text-3xl pb-8">
            How it Works?
          </h1>
          <hr className="h-0.5 mx-10 bg-[#4f200d]"/>
        </div>
        <div className="lg:flex justify-between lg:px-14 lg:pt-10">
          <div className="text-center pb-14 hover:bg-[#fff3e6] lg:hover:scale-105 transition m-4 duration-300 px-4 py-8 rounded-md">
            <span className="text-5xl text-[#613625]">
              <i class="fa-solid fa-magnifying-glass"></i>{" "}
            </span>
            <h4 className="pt-6 text-2xl text-[#4f200d] font-bold pb-1">
              Search
            </h4>
            <p className="text-lg font-medium text-[#4f200d]" s>
              Simply enter your city start your search
            </p>
          </div>
          <div className="text-center pb-14 hover:bg-[#fff3e6] lg:hover:scale-105 transition m-4 duration-300 px-4 py-8 rounded-md">
            <span className="text-5xl text-[#613625]">
              <i class="fa-solid fa-message"></i>
            </span>
            <h4 className="pt-6 text-2xl font-bold pb-1 text-[#4f200d]">
              Meet
            </h4>
            <p className="text-lg font-medium text-[#4f200d]">
              Schedule your appointment to meet the pet your love
            </p>
          </div>
          <div className="text-center pb-14 hover:bg-[#fff3e6] lg:hover:scale-105 transition m-4 duration-300 px-4 py-8 rounded-md">
            <span className="text-5xl text-[#613625]">
              <i class="fa-solid fa-cart-shopping"></i>
            </span>
            <h4 className="pt-6 text-2xl font-bold pb-1 text-[#4f200d]">
              Adopt
            </h4>
            <p className="text-lg font-medium text-[#4f200d]">
              Finally adopt the dog or cat you love
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
