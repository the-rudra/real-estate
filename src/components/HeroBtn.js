import React from "react";

const HeroBtn = ({ title, underline }) => {
  return (
    <div className="relative group">
      <div>
        <button>{title}</button>
      </div>
      <div
        className={`absolute h-[2px] group-hover:bg-[#FF0000]/50 ${underline} w-full duration-200 ease-out`}
      ></div>
    </div>
  );
};

export default HeroBtn;
