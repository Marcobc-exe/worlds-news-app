import useSWR from "swr";
import { getPriceStocksBySymbol } from "../../api/stockPriceStore/stockPriceStore";
import { BarBody } from "./BarBody/BarBody";
import { stockSymbols } from "../../const/stockSymbols";
import "./index.css";

export const StockPriceBar = () => {
  const listSymbols = stockSymbols.map((stockSymbol) => stockSymbol.symbol);
  const config = { suspense: true };
  // const response = useSWR(listSymbols, getPriceStocksBySymbol, config);
  // const { data } = response;

  // const keysStockPrice = Object.keys(data.data);
  // const valuesStockPrice = Object.values(data.data);

  // const result = keysStockPrice.map((item, index) => {
  //   return {
  //     name: stockSymbols[index].name,
  //     symbol: item,
  //     price: valuesStockPrice[index].price,
  //   };
  // });

  // return <BarBody data={result} />
  return <BarBody />
};
