import React from "react";
import Card from "../Card";
import Filter from "../../assets/filter.svg";

const CardData = [
  {
    name: "ArtCrypto",
    price: "11 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "Heyyy",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "Devam",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
  {
    name: "ArtCrypto",
    price: "10 TXDC",
    username: "ArtCrypto",
  },
];

const userDashboard = () => {
  return (
    <div>
      <div>
        <img
          className="w-[1400px] ml-[3rem] mx-11 mt-8 "
          src={Filter}
          alt="Filter"
        />
      </div>
      <div className="grid grid-flow-row grid-cols-6 grid-rows-auto my-1 mx-[50px]">
        {CardData.map((item, index) => {
          return (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              username={item.username}
            />
          );
        })}
      </div>
    </div>
  );
};

export default userDashboard;
