import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Coin = (props) => {
  const navigate = useNavigate();
  return (
    // grid grid-cols-7 col-auto gap-x-4 items-center text-white border-b-2 border-white
    <div className="w-8/12 h-20 grid grid-cols-7 col-auto gap-x-4 items-center text-white border-b-2 border-white ">
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
      <button
        className="border-2 p-2 bg-indigo-500"
        onClick={() => {
          navigate(`/CoinPage/${props.id}`);
        }}
      >
        More Info
      </button>
    </div>
  );
};

export default Coin;
