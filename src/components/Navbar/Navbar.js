import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import "./index.css";
import { categories } from "../../const/categories";
import { capitalizeSentence } from "../../utils/capitalize";
import { useNewsProps } from "../../hooks/useNewsProps";
import { useState } from "react";
import { countries } from "../../const/countries";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export const Navbar = () => {
  const [switchMenuCountries, setSwitchMenuCountries] = useState(false);
  const { handlePropCountry, handlePropCategory } = useNewsProps();
  // const { country } = useSelector((state) => state.headlines);

  const showMenuCountries = (event) => {
    setSwitchMenuCountries(true);
  };

  const hiddenCloseCountries = (event) => {
    setSwitchMenuCountries(false);
  };

  const handleCategoryNews = (event) => {
    handlePropCategory(event.target.id);
  };

  const handleCountryNews = (event) => {
    const props = {
      code: event.target.id,
      name: event.target.alt,
    };
    handlePropCountry(props);
  };

  return (
    <AppBar id="appBar">
      <Toolbar className="toolbar main">
        <h2>News app</h2>
        <Toolbar className="toolbar categories">
          <p
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
                    id={country.code}
                    className="flagCountryFlag"
                    src={country.flag}
                    alt={country.country}
                    onClick={handleCountryNews}
                  />
                ))}
            </div>
          )}
          {categories
            .sort((a, b) => a.localeCompare(b))
            .map((category) => (
              <p id={category} onClick={handleCategoryNews}>
                {capitalizeSentence(category)}
              </p>
            ))}
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};
