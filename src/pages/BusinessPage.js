import { useSelector } from "react-redux";
import { NewsByCategory } from "../components/NewsByCategory/NewsByCategory";
import { Suspense } from "react";
import { PulseLoader } from "react-spinners";
import "../components/ResusableComponents/NewsBody/index.css"

export const BusinessPage = () => {
  const { category, country } = useSelector((state) => state.headlines);

  return (
    <>
      <h1>Business category</h1>
      <Suspense
        fallback={
          <PulseLoader color="#e0e1dd" size={12} speedMultiplier={0.7} />
        }
      >
        <NewsByCategory country={country.code} category={category} delay={0} />
      </Suspense>
    </>
  );
};
