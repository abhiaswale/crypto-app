import axios from "axios";
import React, { useEffect, useState } from "react";
import Coin from "./Coin";

const CoinList = () => {
  const [coinsArray, setCoinsArray] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCoinsArray(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(coinsArray);
  }, [coinsArray]);

  const filterCoin = coinsArray.map((coin) => (
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
    <div>
      <h1 className="text-center text-white text-4xl p-8">
        Welcome to the CryptoChecker
      </h1>
      <div className="flex flex-col content-center items-center">
        {filterCoin}
      </div>
    </div>
  );
};

export default CoinList;
