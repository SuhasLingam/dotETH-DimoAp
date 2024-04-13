import React from "react";

const buyNowCard = () => {
  return (
    <div className="w-full flex flex-row">
      {/**Image BG */}
      <div className="w-1/3 h-max">
        <div className="w-[4rem] h-[30rem]">
          <div className="m-[2rem] w-[27rem] h-[28rem] bg-test-bg rounded-3xl flex relative">
            <div className="text-white pl-5 pt-9">
              <p className="font-customFont text-4xl">Abstract Gradient Bg</p>
              <p className="font-semibold text-xl">by Suhas</p>
            </div>
            <div className="absolute bottom-10 right-7 w-[11rem] h-[15rem] rounded-3xl backdrop-blur-[6px] bg-transparent shadow-white shadow-md ">
              <div className="pl-4 text-white pt-8">
                <p className="font-semibold text-xl">Creator</p>
                <p className="font-customFont mb-6 text-2xl">@BlaBla</p>
                <p className="font-semibold mb-1 text-xl">Initial Price</p>
                <p className="font-bold text-2xl">329.008 ETH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Values and others */}
      <div className=" w-2/3">
        <p className="font-sans text-4xl px-[6rem] pb-7 pt-11">
          Decentralized digital marketplace for design templates. Buy or mint
          exclusive digital assets. Our platform compensates the contributors
          fairly
        </p>

        <div className="grid grid-rows-2 grid-flow-col items-center justify-center space-y-4 space-x-[5rem]">
          <p className="px-8 py-5 text-xl font-bold rounded-full w-max bg-[#F4F4F4]">
            2 Downloads
          </p>
          <p className="font-bold text-xl  flex items-center">Current Price</p>
          <p className="px-8 py-5 text-xl font-bold  rounded-full w-max bg-[#F4F4F4]">
            Filetype: SVG
          </p>
          <p className="border-black flex items-center  border-2 text-[#4F33A3] px-8 py-3 rounded-full font-customFont text-xl">
            329.009 ETH
          </p>
        </div>

        <div>
          <a>Checkout</a>
        </div>
      </div>
    </div>
  );
};

export default buyNowCard;
