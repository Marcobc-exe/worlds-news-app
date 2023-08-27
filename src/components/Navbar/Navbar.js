import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import "./index.css";

const AppBar = styled(
  MuiAppBar,
  {}
)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

export const Navbar = () => {
  return (
    <AppBar id="appBar">
      <Toolbar>
        <h2>News app</h2>
      </Toolbar>
    </AppBar>
  );
};
