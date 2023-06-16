import React from "react";

const Info = () => {
  return (
    <div className="flex">
      <div className="w-[75%] p-16 lg:w-[70%] lg:p-40">
        <p className="text-[28px] lg:text-[42px] font-bold">Get Local Info</p>
        <p className="text-[16px] lg:text-[22px] mt-4">
          Does it have pet-friendly rentals? How are the schools? Get important
          local information on the area you're most interested in.
        </p>
      </div>
      <div className="flex items-center justify-center w-[30%]">
        <div className="text-[16px] bg-red-500 p-2 px-4 text-white lg:text-[32px] rounded-full">
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Info;
