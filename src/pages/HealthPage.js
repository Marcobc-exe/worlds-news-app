import { Suspense } from "react"
import { PulseLoader } from "react-spinners"
import { NewsByCategory } from "../components/NewsByCategory/NewsByCategory"
import { useSelector } from "react-redux";

export const HealthPage = () => {
  const { category, country } = useSelector((state) => state.headlines);

  return (
    <>
    <h1>Health category</h1>
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