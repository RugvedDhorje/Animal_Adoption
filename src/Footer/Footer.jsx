import React from "react";


const Footer = () => {
  return (
    <>
      <div className="w-full h-full bg-[#fff8f0] m-1 rounded-sm">
        <div className="lg:flex justify-between lg:px-20">
          <div className="content-center">
            <p className="text-center text-md px-20 pt-6">
              <span className="font-semibold text-[#4f200d]">HEAD OFFICE </span>
              Sahakar Nagar sector-2 Swargate, Pune, Maharashtra-411009
            </p>
          </div>
          <div className="text-center pt-7 text-[#4f200d]">
            <h3 className="text-2xl font-bold pb-3">Home Service</h3>
            <p className="text-lg pb-1">Pet Grooming</p>
            <p className="text-lg pb-1">Dog Training</p>
            <p className="text-lg pb-1">Dog Walking</p>
            <p className="text-lg pb-1">Home Vet Visit</p>
            <p className="text-lg pb-1">Pet Insurance</p>
          </div>
          <div className="text-center pt-7 text-[#4f200d]">
            <h3 className="text-2xl font-bold pb-3">Policy</h3>
            <p className="text-lg pb-1">Privacy policy</p>
            <p className="text-lg pb-1">Refund policy</p>
            <p className="text-lg pb-1">Dog Walking</p>
            <p className="text-lg pb-1">Cancellation Policy</p>
            <p className="text-lg pb-1">Terms & Condition</p>
          </div>
        </div>
        <div className="px-16 pt-6 text-center pb-5 lg:px-56 text-[#4f200d]">
          <p>
            Shelter & Rescue Registration | Sitemap | Terms of Service | Notice
            at Collection | Privacy Policy | Do Not Sell Or Share My Personal
            Information | Accessibility | Cookie Policy | Your Privacy Choices
          </p>
        </div>
      </div>
      <div className="bg-[#4f200d] lg:flex lg:px-20 lg:justify-between lg:items-center">
        <div className="flex gap-4 px-5 py-3 justify-center">
          <span className="text-2xl text-white">
            <i class="fa-brands fa-facebook"></i>
          </span>
          <span className="text-2xl text-white">
            <i class="fa-brands fa-instagram"></i>
          </span>
          <span className="text-2xl text-white">
            <i class="fa-brands fa-square-x-twitter"></i>
          </span>
          <span className="text-2xl text-white">
            <i class="fa-brands fa-youtube"></i>
          </span>
          <span className="text-2xl text-white">
            <i class="fa-brands fa-pinterest"></i>
          </span>
        </div>
        <div className="text-center pb-3">
          <p className="text-base text-white">
            © 2024, Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
