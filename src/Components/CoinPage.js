import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        // console.log(response.data);
        setCoin(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(coin);
  }, [coin]);

  if (coin) {
    return (
      <div className="bg-gray-900 h-100">
        <h1>{coin.id}</h1>
        <p>{coin.symbol}</p>
        <p className="uppercase">{coin.name}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default CoinPage;
