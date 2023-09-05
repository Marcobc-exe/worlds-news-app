import { Suspense } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { NewsByCategory } from "../components/NewsByCategory/NewsByCategory";

export const SportsPage = () => {
  const { category, country } = useSelector((state) => state.headlines);

  return (
    <>
      <h1>Sports category</h1>
      <Suspense
        fallback={
          <PulseLoader color="#e0e1dd" size={12} speedMultiplier={0.7} />
        }
      >
        <NewsByCategory country={country.code} category={category} delay={0} />
      </Suspense>
    </>
  )
}