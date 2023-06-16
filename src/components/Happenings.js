import React from "react";

const Happenings = () => {
  return (
    <div className="mb-10">
      <div className="mx-12 mt-10">
        <p className="text-[28px]">What's happening in Mumbai, MH</p>
      </div>

      <div className="flex space-x-28 lg:space-x-40 pl-12 pr-12 lg:items-center lg:justify-center text-center pt-10 pb-10 overflow-x-auto">
        <div>
          <p className="text-blue-500 text-[42px]">2080</p>
          <p className="">Homes for sale</p>
        </div>
        <div>
          <p className="text-blue-500 text-[42px]">64</p>
          <p>Open houses</p>
        </div>
        <div>
          <p className="text-blue-500 text-[42px]">952</p>
          <p>Recently sold</p>
        </div>
        <div>
          <p className="text-blue-500 text-[42px]">303</p>
          <p>Price reduced</p>
        </div>
        <div>
          <p className="text-blue-500 text-[42px]">4</p>
          <p>Foreclosures</p>
        </div>
      </div>
    </div>
  );
};

export default Happenings;
