import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Link, useNavigate } from "react-router-dom";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const account = useAccount();
  const navigate = useNavigate();
  const handleConnect = () => {
    setIsConnected(true);
    if (isConnected) {
      navigate("/dashboard");
    }
  };

  const handleSubmit = () => {
    if (isConnected) {
      navigate("/dashboard");
    }
  };

  const handleSubmitDesigner = () => {
    if (isConnected) {
      navigate("/designer");
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center justify-between h-[90px] border-b-[#efefef] border-b-2">
        <div className="flex items-center justify-start -ml-9 mt-[23px]">
          <img width={300} height={300} src={Logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-[20px] mr-11 font-customFont">
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: "#000000",
              accentColorForeground: "white",
              borderRadius: "large",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <ConnectButton />
          </RainbowKitProvider>
          <div className="bg-[#3D00B7] text-white border-2 border-[#3D00B7] rounded-full px-11 py-3 ">
            <button onClick={handleSubmit && handleConnect}>
              {account.status === "connected" ? "User Dashboard" : "User Login"}
            </button>
          </div>
          <div className="bg-white text-[#3D00B7] rounded-full border-2 border-[#3D00B7] px-8 py-3 ">
            <button onClick={handleSubmitDesigner}>
              {account.status === "connected"
                ? "Designer Dashboard"
                : "Designer Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
