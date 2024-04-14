import React from "react";
import Card from "../Card";
import Filter from "../../assets/filter.svg";
import UserHistory from "./user";
import Navbar from "../navbar";

const CardData = [
  {
    name: "ArtCrypto",
    price: "100 TXDC",
    username: "ArtCrypto",
    image:
      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  },
];

const userDashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <img
          className="w-[1400px] ml-[3rem] mx-11 mt-8 "
          src={Filter}
          alt="Filter"
        />
      </div>
      <div className="grid grid-flow-row mt-[6rem] grid-cols-6 grid-rows-auto my-1 mx-[50px]">
        {CardData.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              username={item.username}
              image={item.image}
            />
          );
        })}
      </div>
      <UserHistory />
    </div>
  );
};

export default userDashboard;
