import React from "react";
import Card from "./Card";
import { houses } from "../const/seed";

const NewListing = () => {
  return (
    <div className="mb-10">
      {/* Title */}
      <div className="mx-12 mt-10">
        <p className="text-[28px]">New listings in Delhi, India</p>
        <p className="text-blue-500 underline">
          <a href="">View more listings</a>
        </p>
      </div>
      {/* Listings */}
      <div className="flex p-10 space-x-3 overflow-x-auto">
        {houses.map((house) => (
          <Card img={house.img} price={house.price} />
        ))}
      </div>
    </div>
  );
};

export default NewListing;
