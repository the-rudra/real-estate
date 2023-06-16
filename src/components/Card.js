import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Card = ({ img, price }) => {
  return (
    <div className="shadow-lg rounded-[0.3rem] p-2">
      {/* Image */}
      <div className="relative h-[14rem] w-[19rem] lg:h-[18rem] lg:w-[386px]">
        <img src={`${img}`} className="object-fit rounded-t-[0.3rem]" alt="" />
        <div className="absolute text-white text-[36px] right-0 bottom-0 m-3 mb-8 lg:mb-11  hover:text-red-400">
          <FaRegHeart />
        </div>
      </div>

      {/* Desc */}
      <div>
        <div className="flex">
          <div className="bg-green-500 h-2 w-2 rounded-full mt-2 mr-2"></div>
          <p className="text-[18px]">Single Family Home</p>
        </div>

        <p className="font-bold text-[22px]">{price}</p>
        <div className="gap-x-2">
          <div className="flex">
            <span className="font-bold pr-1 ">5</span>bed
            <span className="font-bold pr-1 pl-1">3</span>bath
            <span className="font-bold pr-1 pl-1">3,832</span>sqft
            <span className="font-bold pr-1 pl-1">9,500</span>sqft lot
          </div>
          <p>22 St, Okhla</p>
          <p>New Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
