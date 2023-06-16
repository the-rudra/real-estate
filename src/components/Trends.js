import React from "react";
import { trendsImg } from "../const/seed";

const Trends = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="absolute text-white text-center z-30 w-[50%]">
        <p className="text-[18px]">Trends</p>
        <p className="font-bold text-[22px] lg:text-[30px] mt-12">
          Soaring Home Prices Are So Last Year: The 10 Cities Where Buyers Can
          Find the Best Deals This Summer
        </p>
        <div className="flex items-center justify-center">
          <div className="text-white w-[10rem] text-[16px] lg:text-[18px] border-2 p-2 rounded-full mt-12">
            <button className="">Read more</button>
          </div>
        </div>
      </div>
      <div className="absolute z-20 bg-black/40 w-full h-[38rem]"></div>
      <div className="flex relative z-10 h-[38rem] overflow-hidden justify-between">
        <img src={trendsImg[0]} className="object-cover w-[33%]" alt="" />
        <img src={trendsImg[1]} className="object-cover w-[33%]" alt="" />
        <img src={trendsImg[2]} className="object-cover w-[33%]" alt="" />
      </div>
    </div>
  );
};

export default Trends;
