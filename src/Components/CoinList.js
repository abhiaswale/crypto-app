import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";

const CoinList = () => {
  const [coinsArray, setCoinsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const refreshPage = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoinsArray(response.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    refreshPage();
  }, []);

  useEffect(() => {
    console.log(coinsArray);
  }, [coinsArray]);

  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  const filterCoin = coinsArray.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const Coins = filterCoin.map((coin) => (
    <Coin
      id={coin.id}
      key={coin.id}
      coinName={coin.name}
      coinSymbol={coin.symbol}
      icon={coin.image}
      price={coin.current_price}
      marketCap={coin.market_cap}
      priceChange={coin.price_change_percentage_24h}
    />
  ));

  return (
    <div className="w-full h-screen overflow-y-auto bg-gray-900">
      <h1 className="text-center text-white text-4xl p-8">
        Welcome to the CryptoChecker
      </h1>
      <div className="flex flex-col content-center items-center">
        <input
          type="text"
          className="lg:w-96 p-3 m-2 rounded-xl "
          placeholder="Search for Coins"
          onChange={changeHandler}
        />
        {loading && (
          <h1 className="w-full h-screen text-3xl text-center text-white">
            Loading...
          </h1>
        )}
        {Coins}
      </div>
    </div>
  );
};

export default CoinList;
