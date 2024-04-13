import React from "react";
import Logo from "../assets/logo.svg";

const navbar = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between h-[90px] border-b-[#efefef] border-b-2">
        <div className="flex items-center justify-start -ml-9 mt-[23px]">
          <img width={300} height={300} src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-[20px] mr-11 font-customFont">
          <div className="bg-[#3D00B7] text-white border-2 border-[#3D00B7] rounded-full px-11 py-3 ">
            <a>User Login</a>
          </div>
          <div className="bg-white text-[#3D00B7] rounded-full border-2 border-[#3D00B7] px-8 py-3 ">
            <a>Designer Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
