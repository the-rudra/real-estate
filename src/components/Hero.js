import React from "react";
import heroBG from "../assets/heroBG.jpg";
import HeroBtn from "./HeroBtn";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const buttons = [
    { title: "BUY", underline: "bg-[#FF0000]/50" },
    { title: "SELL" },
    { title: "RENT" },
  ];
  return (
    <div className="h-[25rem] flex">
      <div className="h-[25rem] overflow-hidden absolute w-full z-20">
        <div className="bg-black/40 absolute h-[25rem] w-full z-10"></div>
        <img
          src={heroBG}
          className="object-cover h-[65rem] w-full"
          alt="Hero"
        />
      </div>
      <div className="relative flex flex-col items-center w-full pt-12 z-30">
        <p className="text-white text-[42px] lg:text-[55px]">
          Homes for everyone
        </p>
        <p className="text-white text-[14px] lg:text-[18px] font-[100]">
          Let's find a home perfect for you.
        </p>
        <ul className="">
          <div className="flex pt-8 space-x-3 text-white text-opacity-70">
            {buttons.map((button) => (
              <HeroBtn title={button.title} underline={button.underline} />
            ))}
          </div>
        </ul>
        {/* Input */}
        <div className="flex mt-8 items-center justify-end">
          <input
            type="search"
            className="bg-white w-[25rem] text-[12px] sm:w-[25rem] lg:text-[20px] py-4 pl-6 pr-6 lg:w-[40rem] rounded-full placeholder:text-gray-400 placeholder:text-[20px] outline-0"
            name=""
            id=""
            placeholder="Name, Address, City, Street . . . "
          />
          <div className="absolute bg-red-500 rounded-full mr-[6px] flex items-center justify-center">
            <button className="p-2">
              <BiSearch className="text-white text-[1.5rem] lg:text-[2rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
