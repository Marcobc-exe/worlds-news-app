import { Toolbar } from "@mui/material";
import "./index.css";
import { Title } from "./Tittle/Title";
import { FlagList } from "./FlagList/FlagList";
import { CategoriesList } from "./CategoriesList/CategoriesList";
import { AppBar } from "./AppBar/AppBar";

export const Navbar = () => {
  return (
    <AppBar id="appBar">
      <Toolbar className="toolbar main">
        <Title />
        <Toolbar className="toolbar categories">
          <FlagList />
          <CategoriesList />
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};
