import { useCallback, useState } from "react";
import { countries } from "../../../const/countries";
import { useNewsProps } from "../../../hooks/useNewsProps";

export const FlagList = () => {
  const { handlePropCountry } = useNewsProps();
  const [switchMenuCountries, setSwitchMenuCountries] = useState(false);

  const showMenuCountries = useCallback((event) => {
    setSwitchMenuCountries(true);
  }, [setSwitchMenuCountries]);

  const hiddenCloseCountries = useCallback((event) => {
    setSwitchMenuCountries(false);
  }, [setSwitchMenuCountries]);

  const handleCountryNews = useCallback((event) => {
    const props = {
      code: event.target.id,
      name: event.target.alt,
      flag: event.target.getAttribute('src'),
    };
    handlePropCountry(props);
  }, [handlePropCountry]);

  return (
    <>
      <p
        className="flagMenu"
        onMouseEnter={showMenuCountries}
        onMouseLeave={hiddenCloseCountries}
      >
        World
      </p>
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
                key={country.code}
                id={country.code}
                className="flagCountryFlag"
                src={country.flag}
                alt={country.country}
                onClick={handleCountryNews}
              />
            ))}
        </div>
      )}
    </>
  );
};
