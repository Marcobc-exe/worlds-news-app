import { useState } from "react";
import "./index.css";
import { capitalizeSentence } from "../../utils/capitalize";
import { countries } from "../../const/countries";
import { useNewsProps } from "../../hooks/useNewsProps";
import { categories } from "../../const/categories";

export const MenuFilter = () => {
  const [switchMenuCountries, setSwitchMenuCountries] = useState(false);
  const [switchMenuCategories, setSwitchMenuCategories] = useState(false);
  const { handlePropCountry, handlePropCategory } = useNewsProps();

  const showMenuCountries = (event) => {
    setSwitchMenuCountries(true);
  };

  const hiddenCloseCountries = (event) => {
    setSwitchMenuCountries(false);
  };

  const showMenuCategories = (event) => {
    setSwitchMenuCategories(true);
  };

  const hiddenCloseCategories = (event) => {
    setSwitchMenuCategories(false);
  };

  const handleCountryNews = (event) => {
    const props = {
      code: event.target.id,
      name: event.target.alt,
    };
    handlePropCountry(props);
  };

  const handleCategoryNews = (event) => {
    handlePropCategory(event.target.id);
  };

  return (
    <>
      <div className="containerBtnMenus">
        <button
          id="button-menu-countries"
          className="buttonMenu countries"
          onMouseEnter={showMenuCountries}
          onMouseLeave={hiddenCloseCountries}
        >
          Countries
        </button>
        <button
          id="button-menu-countries"
          className="buttonMenu categories"
          onMouseEnter={showMenuCategories}
          onMouseLeave={hiddenCloseCategories}
        >
          Categories
        </button>
      </div>

      {switchMenuCountries && (
        <div
          className="containerItem countries"
          onMouseEnter={showMenuCountries}
          onMouseLeave={hiddenCloseCountries}
        >
          {countries
            .sort((a, b) => a.country.localeCompare(b.country))
            .map((country) => (
              <img
                id={country.code}
                className="flagCountryFlag"
                src={country.flag}
                alt={country.country}
                onClick={handleCountryNews}
              />
            ))}
        </div>
      )}

      {switchMenuCategories && (
        <div
          className="containerItem categories"
          onMouseEnter={showMenuCategories}
          onMouseLeave={hiddenCloseCategories}
        >
          {categories.map((category) => (
            <p id={category} onClick={handleCategoryNews}>
              {capitalizeSentence(category)}
            </p>
          ))}
        </div>
      )}
    </>
  );
};
