import { useDispatch } from "react-redux";
import {
  handleNewsByCategory,
  handleNewsByCountry,
} from "../store/headlines/headlines";

export const useNewsProps = () => {
  const dispatch = useDispatch();

  const handlePropCountry = (country) => {
    dispatch(handleNewsByCountry(country));
  };

  const handlePropCategory = (category) => {
    dispatch(handleNewsByCategory(category));
  };

  return {
    handlePropCountry,
    handlePropCategory,
  };
};
