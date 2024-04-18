import React, { useState } from "react";
import { Checkmark } from "react-checkmark";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  };

  return (
    <div>
      {!close ? (
        <div className="w-[55rem] absolute z-20 top-0 left-0 right-0 bottom-0 m-auto border-4 border-[#3D00B7] flex flex-col bg-white h-[30rem] items-center font-customFont rounded-[60px] justify-center text-6xl">
          <button onClick={handleClose}>
            <IoMdCloseCircleOutline
              color="red"
              size={60}
              className="top-5 right-11 absolute"
            />
          </button>
          <Checkmark size="96px" />
          <p className="flex items-center justify-center mt-20 text-black">
            Design Minted Successfully
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Popup;
