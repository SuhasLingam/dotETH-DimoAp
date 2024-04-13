import React from "react";

const buyNowCard = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
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
      <div className="flex flex-col justify-center w-2/3 items-center">
        <p className="font-customFont text-4xl pb-11 px-7">
          Decentralized digital marketplace for design templates. Buy or mint
          exclusive digital assets. Our platform compensates the contributors
          fairly
        </p>
        <div className="flex gap-5 m-4 ">
          <button className="bg-[#F4F4F4] font-semibold px-6 py-4 rounded-full border-[0.1px] border-gray-700">
            2 Downloads
          </button>
          <button className="bg-[#F4F4F4] font-semibold px-6 py-4 rounded-full border-[0.1px] border-gray-700">
            FileType: SVG
          </button>
        </div>
        <div className="flex gap-5 m-4">
          <button className="font-bold px-6 py-4 rounded-full">
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
  );
};

export default buyNowCard;
