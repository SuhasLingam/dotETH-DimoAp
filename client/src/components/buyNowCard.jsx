import React from "react";

const buyNowCard = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-full">
        {/**Image BG */}
        <div className="h-max w-1/3">
          <div className="w-[4rem] h-[30rem]">
            <div className="m-[2rem] w-[27rem] h-[28rem] bg-test-bg rounded-3xl flex relative">
              <div className="pt-9 pl-5 text-white">
                <p className="font-customFont text-4xl">Abstract Gradient Bg</p>
                <p className="text-xl font-semibold">by Suhas</p>
              </div>
              <div className="absolute bottom-10 right-7 w-[11rem] h-[15rem] rounded-3xl backdrop-blur-[6px] bg-transparent shadow-white shadow-md ">
                <div className="pt-8 pl-4 text-white">
                  <p className="text-xl font-semibold">Creator</p>
                  <p className="font-customFont mb-6 text-2xl">@BlaBla</p>
                  <p className="mb-1 text-xl font-semibold">Initial Price</p>
                  <p className="text-2xl font-bold">329.008 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/** Values and others */}
        <div className="flex flex-col items-center justify-center w-2/3">
          <p className="font-customFont pb-11 px-7 text-4xl">
            Decentralized digital marketplace for design templates. Buy or mint
            exclusive digital assets. Our platform compensates the contributors
            fairly
          </p>
          <div className=" flex gap-5 m-4">
            <button className="bg-[#F4F4F4] font-semibold px-6 py-4 rounded-full border-[0.1px] border-gray-700">
              2 Downloads
            </button>
            <button className="bg-[#F4F4F4] font-semibold px-6 py-4 rounded-full border-[0.1px] border-gray-700">
              FileType: SVG
            </button>
          </div>
          <div className="flex gap-5 m-4">
            <button className="px-6 py-4 font-bold rounded-full">
              Current Price
            </button>
            <button className="font-semibold px-6 py-4 rounded-full border-[0.1px] border-violet-900 text-violet-900">
              FileType: SVG
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-[#5a4fcf] text-white  px-6 py-4 font-semibold rounded-full">
              Checkout
            </button>
          </div>
                 
        </div>
      </div>
    </div>
  );
};

export default buyNowCard;
