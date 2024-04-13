import React from "react";
import BuyNowCard from "../buyNowCard";
import Navbar from "../navbar";

const buyNow = () => {
  return (
    <div>
      <Navbar />
      <div className="h-max w-full">
        <BuyNowCard />
      </div>
    </div>
  );
};

export default buyNow;
