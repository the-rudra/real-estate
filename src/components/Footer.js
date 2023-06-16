import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="relative bg-[#213555]">
      {/* Socials */}
      <div className="flex items-center justify-center pt-[4rem] space-x-4">
        <div className="bg-white group h-10 w-10 rounded-[25%]">
          <div className="absolute h-10 w-10 z-10 group-hover:bg-black/20"></div>
          <button className="relative text-[26px] z-20 h-full w-full flex items-center justify-center text-center">
            <BsTwitter />
          </button>
        </div>
        <div className="bg-white group h-10 w-10 rounded-[25%]">
          <div className="absolute h-10 w-10 z-10 group-hover:bg-black/20"></div>
          <button className="relative text-[26px] z-20 h-full w-full flex items-center justify-center text-center">
            <FaLinkedinIn />
          </button>
        </div>
        <div className="bg-white group h-10 w-10 rounded-[25%]">
          <div className="absolute h-10 w-10 z-10 group-hover:bg-black/20"></div>
          <button className="relative text-[26px] z-20 h-full w-full flex items-center justify-center text-center">
            <BsGithub />
          </button>
        </div>
      </div>
      {/* Etc */}
      <div className=" text-white text-opacity-70 text-[16px] text-center pt-[1rem] pb-[4rem]">
        <p>made by the-rudra</p>
      </div>
    </div>
  );
};

export default Footer;
