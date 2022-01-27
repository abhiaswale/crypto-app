import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoinList from "./Components/CoinList";
import CoinPage from "./Components/CoinPage";

function App() {
  return (
    <div className="font-titlium ">
      <Routes>
        <Route path="/" exact element={<CoinList />} />
        <Route path="/CoinPage/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
