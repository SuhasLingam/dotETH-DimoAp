import React from "react";

const Card = ({ name, price, username }) => {
  return (
    <div className="bg-white drop-shadow-lg pt-1 my-4 rounded-2xl h-[300px] w-[220px]">
      <div className="m-2 w-[200px] bg-black h-[165px] rounded-2xl"></div>
      <p className="text-xl mt-1 mb-2 mx-4 font-bold">{name}</p>
      <div className="flex justify-between mx-4 my-2">
        <p className="text-sm text-green-700 font-semibold">✌{price}</p>
      </div>
      <hr className="text-gray-400 mx-4 my-[11px]" />
      <div className="flex items-center justify-between mx-4 my-2">
        <p className="text-[12px] font-customFont text-violet-900">
          by {username}
        </p>
        <button className="bg-transparent  px-2 text-sm font-customFont text-violet-900 border-2 border-violet-900 rounded-3xl">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
