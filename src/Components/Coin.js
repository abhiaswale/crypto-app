import React from "react";

const Coin = (props) => {
  return (
    <div className="w-8/12 h-20 grid grid-cols-7 gap-x-4 items-center text-white border-b-2 border-white">
      <img
        src={props.icon}
        alt={props.name}
        className="w-16 h-16 mb-2px solid white"
      />

      <p className="uppercase  align-center">{props.id}</p>
      <span className="uppercase">{props.coinSymbol}</span>
      <div className="">{props.price}</div>
      <p className="">{props.marketCap.toLocaleString()}</p>
      <p className="">{props.priceChange.toLocaleString()}</p>
      <button className="">More Info</button>
    </div>
  );
};

export default Coin;
