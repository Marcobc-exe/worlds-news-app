import { BASE_URL_STOCKS, API_KEY_STOCKS, axiosStocks } from "../urlapi";

export const getPriceStocksBySymbol = async (symbol) => {
  const S = symbol.length > 0 ? symbol.toString() : symbol;
  const url = `${BASE_URL_STOCKS}price?symbol=${S}&apikey=${API_KEY_STOCKS}`;
  const response = await axiosStocks.get(url);

  return response;
}
