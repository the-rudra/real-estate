import React from "react";

const NavBtn = ({ title, underline }) => {
  return (
    <div>
      <li className="relative group mx-2">
        <button className="px-2">{title}</button>
        <div
          className={`absolute flex h-[2px] w-full group-hover:bg-[#FF0000] top-[40px]   ${underline}`}
        ></div>
      </li>
    </div>
  );
};

export default NavBtn;
