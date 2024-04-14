import React, { useState } from "react";
import { useWriteContract, useAccount } from "wagmi";
import {
  MARKETPLACE_ABI2,
  MARKETPLACE_ADDRESS2,
} from "../contracts/Marketplace2";

const Card = ({ name, price, username, image }) => {
  const account = useAccount();
  const { writeContract, error, status } = useWriteContract();
  const [count, setCount] = useState(100);

  const HandleBuy = async () => {
    await writeContract({
      abi: MARKETPLACE_ABI2,
      address: MARKETPLACE_ADDRESS2,
      functionName: "purchase",
      args: ["1"],
    });
    setTimeout(() => {
      setCount(count + 10);
    }, [20000]);
  };

  return (
    <div className="bg-white drop-shadow-lg pt-1 my-4 rounded-2xl h-[300px] w-[220px]">
      <div className="m-2 w-[200px] bg-black h-[165px] rounded-2xl">
        <img className="w-full h-full" src={image} alt="image" />
      </div>
      <p className="mx-4 mt-1 mb-2 text-xl font-bold">{name}</p>
      <div className="flex justify-between mx-4 my-2">
        <p className="text-sm font-semibold text-green-700">✌{count} TXDC</p>
      </div>
      <hr className="text-gray-400 mx-4 my-[11px]" />
      <div className="flex items-center justify-between mx-4 my-2">
        <p className="text-[12px] font-customFont text-violet-900">
          by {username}
        </p>
        <button
          onClick={HandleBuy}
          className="font-customFont text-violet-900 border-violet-900 rounded-3xl px-2 text-sm bg-transparent border-2"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
