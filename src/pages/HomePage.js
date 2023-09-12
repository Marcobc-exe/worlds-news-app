import { useSelector } from "react-redux";
import { Suspense } from "react";
import { NewsHeadlines } from "../components/NewsHeadlines/NewsHeadlines";
import { PulseLoader } from "react-spinners";
import { capitalizeSentence } from "../utils/capitalize";
import "../App.css";
import { getPriceStocksBySymbol } from "../api/stockPriceStore/stockPriceStore";
import { StockPriceBar } from "../components/StockPriceBar/StockPriceBar";

export const HomePage = () => {
  const { country } = useSelector((state) => state.headlines);
  // getPriceStocksBySymbol()

  return (
    <div className="App">
      <Suspense
        fallback={
          <PulseLoader color="#e0e1dd" size={12} speedMultiplier={0.7} />
        }
      >
        <StockPriceBar />
        <h2>Top Headlines news from {capitalizeSentence(country.name)}</h2>
        <NewsHeadlines country={country.code} delay={0} />
      </Suspense>
    </div>
  );
};
