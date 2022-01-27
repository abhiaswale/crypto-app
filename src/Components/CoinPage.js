import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}
    `
      )
      .then((response) => {
        setCoin(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  if (coin) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" flex flex-col justify-center items-center bg-black bg-opacity-50 w-1/3 rounded-xl p-8 text-white">
          <h1 className="uppercase text-6xl p-2">{coin.id}</h1>
          <div className="flex flex-col w-28 p-2">
            <img src={coin.image.large} />
          </div>
          <div className="flex flex-col w-72 p-2">
            <div className="flex flex-row text-xl">
              <h3 className=" w-40">Symbol:</h3>
              <span>{coin.symbol}</span>
            </div>
            <div className=" flex flex-row text-xl">
              <h3 className=" w-40">Current price: </h3>
              <span>${coin.market_data.current_price.usd}</span>
            </div>
            <div className=" flex flex-row text-xl">
              <h3 className=" w-40">Market Cap:</h3>
              <p>${coin.market_data.market_cap.usd}</p>
            </div>
            <div className=" flex flex-row text-xl">
              <h3 className=" w-40">Total Volume:</h3>
              <p>{coin.market_data.total_volume.usd}</p>
            </div>
            <div className=" flex flex-row text-xl">
              <h3 className=" w-40">24hr High:</h3>
              <p>${coin.market_data.high_24h.usd}</p>
            </div>
            <div className=" flex flex-row text-xl">
              <h3 className=" w-40">24hr Low:</h3>
              <p>${coin.market_data.low_24h.usd}</p>
            </div>
          </div>
          <button className="border-2 p-2 bg-indigo-500">
            <Link to="/">Go Back</Link>
          </button>
          {/* <div className="flex flex-row ">
            <h1>Hi</h1>
            <span>Where are you</span>
          </div>
          <div>012</div>
          <div>0123</div> */}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinPage;
