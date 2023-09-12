import ax from "axios";

export const BASE_URL_NEWS = "https://newsapi.org/";
export const BASE_URL_STOCKS = "https://api.twelvedata.com/";

export const API_KEY_NEWS = "b0802e714e1d493e96ed74ac6f739a35";
export const API_KEY_STOCKS = "8374795e03cf4e448b724c9192056ef7";

export const API_V2 = "v2/";

export const axiosStocks = ax.create({
  baseURL: BASE_URL_STOCKS,
});