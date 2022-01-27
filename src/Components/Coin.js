import React from "react";
import { useNavigate } from "react-router-dom";

const Coin = (props) => {
  const navigate = useNavigate();
  return (
    <div className="lg:w-8/12 lg:p-0 lg:text-base h-20 grid lg:grid-cols-7  lg:gap-x-4 items-center text-white border-b-2 border-white w-full text-xs gap-0 p-4 grid-cols-5">
      <img
        src={props.icon}
        alt={props.name}
        className="lg:w-16 lg:h-16 mb-2px solid white w-8 h-8"
      />
      <p className="uppercase  align-center">{props.id}</p>
      <span className="uppercase lg:inline hidden">{props.coinSymbol}</span>
      <div className="">${props.price}</div>
      <p className="lg:inline hidden">${props.marketCap.toLocaleString()}</p>
      <p
        className={`font-bold
        ${props.priceChange >= 0 ? "text-green-500" : "text-red-700"}`}
      >
        {props.priceChange.toLocaleString()}%
      </p>
      <button
        className="border-2 p-2 bg-indigo-500 rounded-xl"
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
