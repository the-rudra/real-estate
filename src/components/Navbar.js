import React from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import logo from "../assets/homesLogo.png";
import NavBtn from "./NavBtn";

const Navbar = () => {
  const buttons = [
    { title: "Buy", underline: "bg-[#FF0000]" },
    { title: "Sell" },
    { title: "Rent" },
    { title: "Contact" },
  ];
  return (
    <div className="flex items-center justify-between bg-[#213555] px-4 ">
      {/* Left Menu Icon */}
      <div className="lg:hidden">
        <FiMenu className="w-10 h-10 text-white" />
      </div>
      {/* Middle Logo */}
      <div className="p-4">
        {/* Logo */}
        <div className="">
          <img src={logo} className="w-12" alt="" />
        </div>
      </div>
      {/* Links */}
      <div className="hidden lg:flex text-white">
        <ul className="flex space-x-10 py-4">
          {buttons.map((button) => (
            <NavBtn title={button.title} underline={button.underline} />
          ))}
        </ul>
      </div>

      {/* Right user icon */}
      <div className="w-10 h-full bg-sky-100 rounded-full flex items-center justify-center lg:hidden">
        <AiOutlineUser className="text-[36px]" />
      </div>
      <div className="hidden lg:flex items-center ">
        <div className=" text-white">
          <button>Log In</button>
        </div>
        <div className=" bg-red-500 p-2 px-4 ml-6 text-white rounded-full">
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
