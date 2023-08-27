import { useSelector } from "react-redux";
import { Layout } from "../components/Layout/Layout";
import { MenuFilter } from "../components/MenuFilter/MenuFilter";
import { Suspense } from "react";
import { NewsHeadlines } from "../components/NewsHeadlines/NewsHeadlines";
import { PulseLoader } from "react-spinners";
import { capitalizeSentence, capitalizeText } from "../utils/capitalize";

export const HomePage = () => {
  const { country, category } = useSelector((state) => state.headlines);

  return (
    <>
      <Layout />
      <div className="App">
        <h2>Top Headlines news from {capitalizeSentence(country.name)}</h2>
        <span>{capitalizeText(category)} category</span>
        <MenuFilter />
        {/* <Suspense
          fallback={
            <PulseLoader color="#e0e1dd" size={12} speedMultiplier={0.7} />
          }
        >
          <NewsHeadlines country={country.code} category={category} delay={0} />
        </Suspense> */}
      </div>
    </>
  );
};
