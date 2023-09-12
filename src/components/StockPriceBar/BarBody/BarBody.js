import Slider from "react-slick";
import { responsiveSettings, settings } from "../configSlider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const BarBody = ({ data }) => {
  console.log(stockData);
  return (
    <Slider {...settings} responsive={responsiveSettings} className="toolbarStock">
      {stockData
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((stockSymbol, index) => {
          const active = stockSymbol.name.length > 16 ? true : false;

          return (
            <div key={index} className={"cardStock"} >
              <div className="boxNameStock">
                <div className={`nameStock ${active}`}>{stockSymbol.name}</div>
              </div>
              <p className={"priceStock"}>{`$${stockSymbol.price}`}</p>
            </div>
          );
        })}
    </Slider>
  );
};

const stockData = [
  {
    name: "Amazon.com, Inc.",
    symbol: "AMZN",
    price: "143.12000",
  },
  {
    name: "Meta Platforms",
    symbol: "META",
    price: "307.57000",
  },
  {
    name: "Netflix, Inc.",
    symbol: "NFLX",
    price: "445.36000",
  },
  {
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    price: "451.77499",
  },
  {
    name: "S&P 500",
    symbol: "GSPC",
    price: "4486.87000",
  },
  {
    name: "Tesla, Inc.",
    symbol: "TSLA",
    price: "273.64500",
  },
  {
    name: "Walmart Inc.",
    symbol: "WMT",
    price: "164.34000",
  },
  {
    name: "Amazon.com, Inc.",
    symbol: "AMZN",
    price: "143.12000",
  },
  {
    name: "Meta Platforms",
    symbol: "META",
    price: "307.57000",
  },
  {
    name: "Netflix, Inc.",
    symbol: "NFLX",
    price: "445.36000",
  },
  {
    name: "NVIDIA Corporation",
    symbol: "NVDA",
    price: "451.77499",
  },
  {
    name: "S&P 500",
    symbol: "GSPC",
    price: "4486.87000",
  },
  {
    name: "Tesla, Inc.",
    symbol: "TSLA",
    price: "273.64500",
  },
  {
    name: "Walmart Inc.",
    symbol: "WMT",
    price: "164.34000",
  },
];
