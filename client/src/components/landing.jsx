import React from "react";
import landing from "../assets/landing.svg";
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-9 ml-[50px]">
        <img width={1400} src={landing} alt="Landing Page" />
      </div>
    </div>
  );
};

export default LandingPage;
