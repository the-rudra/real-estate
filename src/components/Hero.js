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
    <div className="h-[35rem] flex">
      <div className="h-[35rem] overflow-hidden absolute w-full z-20">
        <div className="bg-black/40 absolute h-[35rem] w-full z-10"></div>
        <img
          src={heroBG}
          className="object-cover h-[65rem] w-full"
          alt="Hero"
        />
      </div>
      <div className="relative flex flex-col items-center w-full pt-24 z-30">
        <p className="text-white text-[42px] lg:text-[64px] font-semibold">
          Homes for everyone
        </p>
        <p className="text-white text-[14px] lg:text-[24px] font-[100]">
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
            className="bg-white w-[25rem] text-[12px] sm:w-[25rem] lg:text-[28px] py-4 pl-6 pr-6 lg:w-[48rem] rounded-full placeholder:text-gray-400 placeholder:text-[18px] lg:placeholder:text-[28px] outline-0"
            name=""
            id=""
            placeholder="Name, Address, City, Street . . . "
          />
          <div className="absolute bg-red-500 rounded-full mr-[6px] flex items-center justify-center">
            <button className="p-2 lg:p-4">
              <BiSearch className="text-white text-[1.5rem] lg:text-[2rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
