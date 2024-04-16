import React from "react";

const userHistory = () => {
  return (
    <>
      <p className="font-customFont ml-11 text-6xl mt-[3rem]">My Purchases</p>
      <div className="bg-white flex flex-col drop-shadow-lg ml-11 mb-[7rem] pt-1 mt-11 my-4 rounded-2xl h-[300px] w-[220px]">
        <div className="m-2 w-[200px] bg-black h-[165px] rounded-2xl">
          <img
            className="w-full h-full"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="image"
          />
        </div>
        <p className="mx-4 mt-1 mb-2 text-xl font-bold">Suhas</p>
        <div className="flex justify-between mx-4 my-2">
          <p className="text-sm font-semibold text-green-700">✌110 TXDC</p>
        </div>
        <hr className="text-gray-400 mx-4 my-[11px]" />
        <div className="flex items-center justify-between mx-4 my-2">
          <p className="text-[12px] font-customFont text-violet-900">
            by Suhas
          </p>
        </div>
      </div>
    </>
  );
};

export default userHistory;
