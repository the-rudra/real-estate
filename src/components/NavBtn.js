import React from "react";

const NavBtn = ({ title, underline }) => {
  return (
    <div>
      <li className="relative group mx-2 font-semibold">
        <button className="px-2">{title}</button>
        <div
          className={`absolute flex h-4 w-full group-hover:bg-[#FF0000] -bottom-8   ${underline}`}
        ></div>
      </li>
    </div>
  );
};

export default NavBtn;
