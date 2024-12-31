import React from "react";
import logo from "../img/logo2.png";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 justify-center">
      <nav className="flex items-center justify-around w-full px-10 py-5 text-azra9  ">
        <div>
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div className="flex gap-10 justify-around mx-28 items-center">
          <span className=" cursor-pointer px-3 py-2 group">
            <span className=" font-semibold -inset-5  bg-a5dhr opacity-0 hover:text-azra9  group-hover:opacity-100 transition-all duration-300"></span>
            <span className=" z-10">Places</span>
          </span>
          <span className=" cursor-pointer px-3 py-2 group">
            <span className=" font-semibold -inset-5  bg-a5dhr opacity-0 hover:text-azra9  group-hover:opacity-100 transition-all duration-300"></span>
            <span className=" z-10">About</span>
          </span>
          <span className=" cursor-pointer px-3 py-2 group">
            <span className=" font-semibold -inset-5  bg-a5dhr opacity-0 hover:text-azra9 hover:font-semibold group-hover:opacity-100 transition-all duration-300"></span>
            <span className=" z-10">Blog</span>
          </span>
          <button className="rounded-full border-2 z-20 border-azra9 text-azra9 hover:bg-azra9 hover:text-white duration-300 transition-colors ease-in-out px-14 py-3 font-semibold ">
            Take a Trip
          </button>
        </div>
      </nav>
      <hr className="mx-28" />
      <div className="copyright">
        <p className="font-extralight text-azra9 font-gothic px-28 py-5 text-center">
          copyright@AmineBarhoumi 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
