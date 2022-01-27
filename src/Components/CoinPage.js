import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import image from "../images/bitcoin2.jpg";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}
    `
      )
      .then((response) => {
        setCoin(response.data);
        setloading(false);
      });
  }, [id]);

  if (coin) {
    return (
      <div
        className=" w-full h-screen bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        {loading && (
          <h1 className="w-full h-screen text-3xl text-center text-white">
            Loading...
          </h1>
        )}
        <div className=" flex flex-col justify-center items-center bg-black bg-opacity-80 w-1/3 rounded-xl p-8 text-white">
          <h1 className="uppercase text-6xl p-2 font-bold">{coin.id}</h1>
          <div className="flex flex-col w-28 p-2">
            <img src={coin.image.large} alt={"cryptoImg"} />
          </div>
          <div className="flex flex-col w-72 p-2">
            <div className="flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">Symbol:</h3>
              <span>{coin.symbol}</span>
            </div>
            <div className=" flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">Current price: </h3>
              <span>${coin.market_data.current_price.usd}</span>
            </div>
            <div className=" flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">Market Cap:</h3>
              <p>${coin.market_data.market_cap.usd}</p>
            </div>
            <div className=" flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">Total Volume:</h3>
              <p>{coin.market_data.total_volume.usd}</p>
            </div>
            <div className=" flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">24hr High:</h3>
              <p className="text-green-500">
                ${coin.market_data.high_24h.usd.toLocaleString()}
              </p>
            </div>
            <div className=" flex flex-row text-xl my-1">
              <h3 className="font-bold w-40">24hr Low:</h3>
              <p className="text-red-700">
                ${coin.market_data.low_24h.usd.toLocaleString()}
              </p>
            </div>
          </div>
          <button className="border-2 p-2 bg-indigo-500 rounded-xl my-3">
            <Link to="/">Go Back</Link>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinPage;
