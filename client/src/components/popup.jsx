import React from "react";
import { Checkmark } from "react-checkmark";

const popup = () => {
  return (
    <div className="w-[55rem] absolute z-20 top-0 left-0 right-0 bottom-0 m-auto border-4 border-[#3D00B7] flex flex-col bg-white h-[30rem] items-center font-customFont rounded-[60px] justify-center text-6xl">
      <Checkmark size="96px" />
      <p className="flex items-center justify-center mt-20 text-black">
        Design Minted Successfully
      </p>
    </div>
  );
};

export default popup;
