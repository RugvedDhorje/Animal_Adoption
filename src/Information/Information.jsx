import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Information = () => {
  const { handleInfo1, handleInfo2, handleInfo3, handleInfo4 } =
    useContext(StoreContext);
  return (
    <div className="max-h-screen bg-[#fff8f0] py-10 mx-1 rounded-sm ">
      <div className="px-8 lg:px-52">
        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold text-[#4f200d] text-lg lg:text-2xl">
              Why Should You Adopt a Dog or Cat?
            </h3>
            <button onClick={() => handleInfo1()}>
              <span id="minus1" className="lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span id="plus1" className="hidden inset-0 lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <hr className="h-0.5 bg-[#4f200d]" />
          <div id="info-1" className="hidden fixed-bottom inset-0">
            <p className="text-base lg:text-lg text-[#4f200d]">
              Did you know that over 2000 people per hour in India run a search
              right here looking to adopt a pet? Pet adoption is becoming the
              preferred way to find a new pet. Adoption will always be more
              convenient than buying a puppy for sale from a pet shop or finding
              a kitten for sale from a litter. Pet adoption brings less stress
              and more savings! So what are you waiting for? Go find that
              perfect pet for home!
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold text-lg lg:text-2xl text-[#4f200d]">
              What is the fee to adopt the pet?
            </h3>
            <button onClick={() => handleInfo2()}>
              <span id="minus2" className="lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span id="plus2" className="hidden inset-0 lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <hr className="h-0.5 bg-[#4f200d]" />
          <div id="info-2" className="hidden fixed-bottom inset-0 ">
            <p className="text-base lg:text-lg text-[#4f200d]">
              No, there is no fee for pet adoption on GetABuddy. However, if you
              adopt from a different city pet owner/rescuer can ask for travel
              charges. In case if you find someone asking for charges you can
              write us at support@getabuddy.com.
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-2 ">
            <h3 className="font-semibold text-lg lg:text-2xl text-[#4f200d]">
              How old i need to be to adopt a pet?
            </h3>
            <button onClick={() => handleInfo3()}>
              <span id="minus3" className=" lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span id="plus3" className="hidden inset-0 lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <hr className="h-0.5 bg-[#4f200d]" />
          <div id="info-3" className="hidden fixed-bottom inset-0 ">
            <p className="text-base lg:text-lg text-[#4f200d]">
              You need to be at least 18+ years old to adopt
            </p>
          </div>
        </div>

        <div className="mb-5">
          <div className="flex justify-between mb-2">
            <h3 className="font-semibold text-lg lg:text-2xl text-[#4f200d]">
              Can you return a adopted pet?
            </h3>
            <button onClick={() => handleInfo4()}>
              <span id="minus4" className="lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-plus"></i>
              </span>
              <span id="plus4" className="hidden inset-0 lg:text-xl text-[#4f200d]">
                <i class="fa-solid fa-minus"></i>
              </span>
            </button>
          </div>
          <hr className="h-0.5 bg-[#4f200d]" />
          <div id="info-4" className="hidden fixed-bottom inset-0 ">
            <p className="text-base lg:text-lg text-[#4f200d]">
              We understand it can be hard to get an adjusted pet in the new
              home and vice versa, as long as your reason for returning is
              reasonable, you'll be welcome to put it up for adoption again
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
